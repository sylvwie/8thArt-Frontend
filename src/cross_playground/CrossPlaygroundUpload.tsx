import crossArrow from "../assets/icons/cross-arrow.png";
import uploadIcon from "../assets/icons/drop-icon.png";
import input1 from  "../assets/cross-samples/01-image.jpg";
import input2 from  "../assets/cross-samples/02-image.png";
import input3 from  "../assets/cross-samples/03-image.png";
import result1 from  "../assets/cross-samples/01-result.jpg";
import result2 from  "../assets/cross-samples/02-result.png";
import result3 from  "../assets/cross-samples/03-result.jpg";
import specialBg from "../assets/template/special-background-ascii.gif";
import crossRefEmpty from "../assets/icons/cross-reference-empty.png";

export function CrossPlaygroundUpload() {

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

	return <>
		{/* UPLOAD SAMPLES */}

		{/* UPLOAD ZONE */}
            <section className="cross-upload-section">
                <div className="cross-upload-box">
                    <img src={uploadIcon} alt="Upload Icon" className="cross-upload-icon" />
                    <span className="cross-upload-text">Drop an image to convert it into a game</span>
                    <button className="cross-upload-btn">CHOOSE FILE</button>
                    <img src={specialBg} alt="Special Background" className="cross-upload-bg" />
                    <img src={crossRefEmpty} alt="Cross Reference Empty" className="cross-reference-empty" />
                </div>
            </section>

		<div className="cross-playground-upload" >
            <section className="cross-samples-section">
                {samples.map((sample) => (
                    <div key={sample.id} className="cross-sample-row-wrapper">

                        <div className="cross-sample-row-header">
                            <span className="cross-sample-section-title">
                                {`SAMPLE ${sample.id}`}
                            </span>
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
                                <button className="cross-sample-load-btn">LOAD SAMPLE</button>
                            </div>
                        </div>
                    </div>
                ))}
				</section>
		</div>
	</>

}