import { useShowcaseStore } from "../../store/useShowcaseStore";

import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import crossRefFull from "/src/assets/icons/cross-reference-full.png";

import DecryptedText from "../motion/DecryptedText";
import { Logo } from "../shared/Logo";
import { StatusLog } from "../shared/StatusLog";
 
 export function CrossSearchScanning() {
	const setStep = useShowcaseStore((s) => s.setStep);
	const goToArchive = useShowcaseStore((s) => s.goToArchive);
	return (
		<div className="cross-search-section">
				<div className="cross-search-container">
					<Logo/>
					<div className="cross-search-logs">
						<span className="log-line">

							<span className="ok-text">
									<DecryptedText
										text="[ UPLOAD ] "
										sequential
										useOriginalCharsOnly={false}
									></DecryptedText>
							</span>

							<span id="img-received-text">
								<DecryptedText
										text="Image received..."
										sequential
										delay={100}
										useOriginalCharsOnly={false}
								></DecryptedText>
							</span>
						</span>

						<span className="log-line"><span className="ok-text">
							<DecryptedText
									text="[ SCAN ] "
									delay={400}
									sequential
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>
							<DecryptedText
									text=" Preparing core..."
									sequential
									delay={500}
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>

						<span className="log-line"><span className="ok-text">
							<DecryptedText
									text="[ SCAN ] "
									delay={200}
									sequential
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>
							<DecryptedText
									text="Analyze similarity..."
									sequential
									delay={300}
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>

						<span className="log-line"><span className="ok-text">
							<DecryptedText
									text="[ 0K ] "
									sequential
									delay={600}
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>
							<DecryptedText
									text="Core extraction completed."
									sequential
									delay={700}
									useOriginalCharsOnly={false}
							></DecryptedText>
						</span>

					</div>
				</div>

			<div className="cross-search-box-wrapper">
				<div className="cross-search-box">
				<span id="cross-search-main-text">CROSS-REFERENCE ENGINE v1.0.0</span>

				<div className="cross-search-container">
				<img id="special-background" src={specialBgAscii} alt="Special Background" />

					<div className="cross-search-header">
						<span id="cross-search-header-text"> [ ANALYSIS HUB ]</span>
						<div id="cross-search-header-buttons">
							<button id="cross-search-reset-button">RESET</button>
							<button id="cross-search-close-button" onClick={goToArchive}>
								<img src={closeIcon} alt="Close" />
							</button>
						</div>
					</div>

					<div className="cross-search-scanning-body">
						<img src={crossRefFull} alt="Cross Reference Full" />
						<div id="cross-search-body-text-container">
							<span id="cross-search-scanning-body-text"> [ ANALYZING PATTERN DATA  ]</span>
							<button onClick={() => setStep("result")}>
								<span>See result</span>
							</button>
							{/* <span> Inserire barra di caricamento "progress-bar" </span> */}
						</div>
					</div>
				</div>
			</div>	
				<StatusLog></StatusLog>
			</div>

		</div>
	)
}
