import closeIcon from "/src/assets/icons/close-icon.svg";
import squares1 from "/src/assets/icons/squares1.png";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";

type ThankYouPopupProps = {
	onClose?: () => void;
};


export function ThankYouPopup({onClose}: ThankYouPopupProps) {
	return (
		<div id="thankyou-popup-wrapper">
			<div id="thankyou-popup-container">

				<div id="thankyou-popup-header">
					<div id="thankyou-popup-header-title-box">
						<img src={squares1} alt="squares1 icon" className="squares1" />
						<span id="thankyou-popup-title">Thank_you.exe</span>
					</div>
					
					<button
						type="button"
						id="thankyou-popup-close-button"
						onClick={onClose}
					>
						<img
							src={closeIcon}
							alt="close popup"
						/>
					</button>	
				</div>

				<div id="thankyou-popup-body">
					<img id="thankyou-popup-bg" src={specialBgAscii} alt="special background" />
					<div id="thankyou-popup-message">Thank you for participating in this enrichment archive activity !!</div>
				</div>
				

			</div>
		</div>
	);
}

{/* AGGIUNGO DOPO IL LOGIN

	const [popupClosed, setPopupClosed] = useState(false);
	
	{!popupClosed && (
		<ThankYouPopup
			onClose={() => setPopupClosed(true)}
		/>
	)}
	*/ }