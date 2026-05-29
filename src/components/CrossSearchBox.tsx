import DecryptedText from "./motion/DecryptedText";
import { Logo } from "./shared/Logo";
import { StatusLog } from "./shared/StatusLog";
import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import crossRefEmpty from "/src/assets/icons/cross-reference-empty.png";
 
 export function CrossSearchBox() {
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
							<DecryptedText
									text='Waiting for an input...'
									sequential
									delay={100}
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
							<button id="cross-search-close-button"><img src={closeIcon} alt="Close" /></button>
						</div>
					</div>

					<div className="cross-search-box-body">
						<img src={crossRefEmpty} alt="Cross Reference Empty" />
						<div id="cross-search-body-text-container">
							<span id="cross-search-box-body-text"> [ DROP IMAGE ALPHA-PATTERN ]</span>
							<span>or click to browse</span>
						</div>
					</div>
				</div>
			</div>	
				<StatusLog></StatusLog>
			</div>

		</div>
	)
}
