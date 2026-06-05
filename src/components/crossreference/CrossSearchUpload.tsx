import { useShowcaseStore } from "../../store/useShowcaseStore";
import { DropZone } from "../upload/DropZone";

import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import crossRefEmpty from "/src/assets/icons/cross-reference-empty.png";

import DecryptedText from "../motion/DecryptedText";
import { Logo } from "../shared/Logo";
import { StatusLog } from "../shared/StatusLog";

export function CrossSearchBox() {
	const setStep = useShowcaseStore((s) => s.setStep);
	const setData = useShowcaseStore((s) => s.setData);

	const resetUpload = useShowcaseStore((s) => s.resetUpload);
	const goToArchive = useShowcaseStore((s) => s.goToArchive);

	// File Drop Handler
	const handleFileDrop = (file: File) => {
		console.log("Uploaded file:", file);

		setData({
			file,
		});

		setStep("scanning");
	};

	return (
		<div className="cross-search-section">
			<div className="cross-search-container">
				<Logo />

				<div className="cross-search-logs">
					<span className="log-line">
						<span className="ok-text">
							<DecryptedText
								text="[ UPLOAD ] "
								sequential
								useOriginalCharsOnly={false}
							/>
						</span>

						<DecryptedText
							text="Waiting for an input..."
							sequential
							delay={100}
							useOriginalCharsOnly={false}
						/>
					</span>
				</div>
			</div>

			<div className="cross-search-box-wrapper">
				<div className="cross-search-box">
					<span id="cross-search-main-text">
						CROSS-REFERENCE ENGINE v1.0.0
					</span>

					<div className="cross-search-container">
						<img
							id="special-background"
							src={specialBgAscii}
							alt="Special Background"
						/>

						<div className="cross-search-header">
							<span id="cross-search-header-text">
								[ ANALYSIS HUB ]
							</span>

							<div id="cross-search-header-buttons">
							{/* RESET BTN */}
								<button id="cross-search-reset-button" onClick={resetUpload}>
									RESET
								</button>
							{/* CLOSE BTN */}
								<button id="cross-search-close-button" onClick={goToArchive}>
									<img src={closeIcon} alt="Close" />
								</button>
							</div>
						
						</div>

						<div className="cross-search-box-body">
							<img
								src={crossRefEmpty}
								alt="Cross Reference Empty"
							/>

							<div id="cross-search-body-text-container">
								<span id="cross-search-box-body-text">
									[ DROP IMAGE ALPHA-PATTERN ]
								</span>

								<DropZone onFileDrop={handleFileDrop} />
							</div>
						</div>
					</div>
				</div>

				<StatusLog />
			</div>
		</div>
	);
}