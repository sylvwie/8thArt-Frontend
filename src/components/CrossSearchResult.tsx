import { CrossReferenceResultbox } from "./CrossReferenceResultBox";
import DecryptedText from "./motion/DecryptedText";
import { Logo } from "./shared/Logo";
import { StatusLog } from "./shared/StatusLog";
import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
 
 export function CrossSearchResult() {
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

							<span id="img-received-text-alt">
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

					<div id="cross-search-result-header">
						<button id="cross-search-result-close-button"><img src={closeIcon} alt="Close" /></button>
					</div>

					<div className="cross-search-result-body">
						<CrossReferenceResultbox />
					</div>
				</div>
			</div>	
				<StatusLog></StatusLog>
			</div>

		</div>
	)
}
