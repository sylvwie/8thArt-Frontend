import { useShowcaseStore } from "../../store/useShowcaseStore";

import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import DecryptedText from "../motion/DecryptedText";

import { Logo } from "../shared/Logo";
import { StatusLog } from "../shared/StatusLog";
import { CrossReferenceResultBox } from "./CrossReferenceResultBox";
import type { CrossReferenceProps } from "../props/CrossReferenceProps";

const EMPTY_RESULTS: CrossReferenceProps[] = [];

export function CrossSearchResult() {

  const resetUpload = useShowcaseStore((s) => s.resetUpload);
  const goToArchive = useShowcaseStore((s) => s.goToArchive);
  const results = useShowcaseStore((s) => s.view.data.results ?? EMPTY_RESULTS);

  const primaryMatch = results[0] ?? null;
  const similarGames = results.slice(1);

  return (
    <div className="cross-search-section">
      <div className="cross-search-container">
        <Logo />
        <div className="cross-search-logs">
          <span className="log-line">
            <span className="ok-text">
              <DecryptedText text="[ UPLOAD ] " sequential useOriginalCharsOnly={false} />
            </span>
            <span id="img-received-text">
              <DecryptedText text="Image received..." sequential delay={100} useOriginalCharsOnly={false} />
            </span>
          </span>
          <span className="log-line">
            <span className="ok-text">
              <DecryptedText text="[ SCAN ] " delay={400} sequential useOriginalCharsOnly={false} />
            </span>
            <DecryptedText text=" Preparing core..." sequential delay={500} useOriginalCharsOnly={false} />
          </span>
          <span className="log-line">
            <span className="ok-text">
              <DecryptedText text="[ SCAN ] " delay={200} sequential useOriginalCharsOnly={false} />
            </span>
            <DecryptedText text="Analyze similarity..." sequential delay={300} useOriginalCharsOnly={false} />
          </span>
          <span className="log-line">
            <span className="ok-text">
              <DecryptedText text="[ 0K ] " sequential delay={600} useOriginalCharsOnly={false} />
            </span>
            <DecryptedText text="Core extraction completed." sequential delay={700} useOriginalCharsOnly={false} />
          </span>
        </div>
      </div>

      <div className="cross-search-box-wrapper">
        <div className="cross-search-box">
          <span id="cross-search-main-text">CROSS-REFERENCE ENGINE v1.0.0</span>

          <div className="cross-search-container">
            <img id="special-background" src={specialBgAscii} alt="Special Background" />

            <div className="cross-search-header">
              <span id="cross-search-header-text"></span> 
              <div id="cross-search-header-buttons">
                {/* RESET BTN */}
                <button id="cross-search-reset-button" onClick={resetUpload}>RESET</button>
                {/* CLOSE BTN */}
                <button id="cross-search-close-button" onClick={goToArchive}>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>
            </div>

            {/* RESULT */}
            {primaryMatch && (
              <CrossReferenceResultBox
                game={primaryMatch}
                similarGames={similarGames}
              />
            )}
          </div>
        </div>
        <StatusLog />
      </div>
    </div>
  );
}


// se voglio aggiungere la preview del file caricato in upload

//import { MediaPreview } from "../upload/MediaPreview";

{/* UPLOADED FILE PREVIEW */ }
{/* {file && (
		<MediaPreview file={file} />
)} */}