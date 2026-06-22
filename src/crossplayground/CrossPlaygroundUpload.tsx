import { useCrossPlaygroundStore } from "../store/useCrossPlaygroundStore";
import { DropZone } from "../components/upload/DropZone";
import crossArrow from "../assets/icons/cross-arrow.png";
import uploadIcon from "../assets/icons/drop-icon.png";
import input1 from "../assets/cross-samples/01-image.jpg";
import input2 from "../assets/cross-samples/02-image.png";
import input3 from "../assets/cross-samples/03-image.png";
import result1 from "../assets/cross-samples/01-result.jpg";
import result2 from "../assets/cross-samples/02-result.png";
import result3 from "../assets/cross-samples/03-result.jpg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import crossRefEmpty from "/src/assets/icons/cross-reference-empty.png";

export function CrossPlaygroundUpload() {
  const setStep = useCrossPlaygroundStore((s) => s.setStep);
  const setData = useCrossPlaygroundStore((s) => s.setData);
  const resetUpload = useCrossPlaygroundStore((s) => s.resetUpload);

  // File Drop Handler
  const handleFileDrop = (file: File) => {
    console.log("Uploaded file:", file);
    const previewUrl = URL.createObjectURL(file);
    setData({ file, previewUrl });
    setStep("scanning");
  };

  // Sample Load Handler
  const handleSampleLoad = async (artreference: string, sampleId: string) => {
    try {
      const res = await fetch(artreference);
      const blob = await res.blob();
      const file = new File([blob], `sample-${sampleId}.jpg`, { type: blob.type });
      const previewUrl = URL.createObjectURL(file);
      setData({ file, previewUrl });
      setStep("scanning");
    } catch (err) {
      console.error("Errore nel caricamento del sample:", err);
    }
  };

  const samples = [
    {
      id: "01",
      title: "SAMPLE 01 // Colosseum",
      mapping: "Input:  Colosseum → Result: Assassin's Creed: Brotherhood",
      artreference: input1,
      gameresult: result1,
    },
    {
      id: "02",
      title: "SAMPLE 02 // Guernica",
      mapping: "Input: Guernica → Result: This War of Mine",
      artreference: input2,
      gameresult: result2,
    },
    {
      id: "03",
      title: "SAMPLE 03 // La Madre Patria chiama!",
      mapping: "Input:  La Madre Patria chiama! → Result: Metal Gear Solid 3",
      artreference: input3,
      gameresult: result3,
    },
  ];

  return (
    <>
      {/* UPLOAD ZONE */}
      <section className="cross-upload-section">
        <div className="cross-upload-box-container">
          <img src={specialBgAscii} alt="Special Background" className="cross-upload-bg" />

          <div className="cross-upload-header">
            <span id="cross-upload-header-text">[ ANALYSIS HUB ]</span>
            <button id="cross-upload-reset-button" onClick={resetUpload}>
              RESET
            </button>
          </div>

          <div className="cross-upload-box">
            <img src={uploadIcon} alt="Upload Icon" className="cross-upload-icon" />
            <span className="cross-upload-text">[ DROP AN IMAGE TO GET A GAME ]</span>
            <DropZone onFileDrop={handleFileDrop} />
            <img src={crossRefEmpty} alt="Cross Reference Empty" className="cross-reference-empty" />
          </div>
        </div>
      </section>

      {/* UPLOAD SAMPLES */}
      <div className="cross-playground-upload">
        <section className="cross-samples-section">
          {samples.map((sample) => (
            <div key={sample.id} className="cross-sample-row-wrapper">

              <div className="cross-sample-row-header">
                <span className="cross-sample-section-title">{`SAMPLE ${sample.id}`}</span>
                <span className="cross-sample-status-text">READY TO TEST</span>
              </div>

              <div className="cross-sample-card-container">
                <div className="cross-sample-card-grid">
                  <div className="cross-sample-media-box">
                    <img src={sample.artreference} alt="Art Reference" />
                  </div>
                  <div className="cross-sample-arrow-exchange">
                    <img src={crossArrow} alt="Exchange Arrow" />
                  </div>
                  <div className="cross-sample-media-box">
                    <img src={sample.gameresult} alt="Game Result" />
                  </div>
                </div>

                <div className="cross-sample-card-footer">
                  <div className="cross-sample-info-texts">
                    <span className="cross-sample-title">{sample.title}</span>
                    <span className="cross-sample-mapping">{sample.mapping}</span>
                  </div>
                  <button
                    className="cross-sample-load-btn"
                    onClick={() => handleSampleLoad(sample.artreference, sample.id)}
                  >
                    LOAD SAMPLE
                  </button>
                </div>
              </div>

            </div>
          ))}
        </section>
      </div>
    </>
  );
}