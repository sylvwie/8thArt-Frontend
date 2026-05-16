import LogoIcon from "/src/assets/logos/logo.svg";
import IedLogo from "/src/assets/logos/ied-logo.svg";
import FivezerofiveGamesLogo from "/src/assets/logos/505-games-logo.svg";

export function Footer() {
	return (
		<div id="footer">
			<div id="footer-container">

				<div id="footer-column-left">
					<span id="site-description">A DIGITAL ARCHIVE OF THE 8TH ART SINCE 2026.</span>
					<div id="footer-collabs-container">
						<img src={IedLogo} alt="IED" />
						<img src={FivezerofiveGamesLogo} alt="505 GAMES" />
					</div>
				</div>

				<div id="footer-logo-container">
					<img src={LogoIcon} alt="LogoIcon" />
				</div>

				<div id="footer-column-right">
					<div id="navigate-columns">
						<div className="footer-nav-group">
							<span className="footer-title-text">Navigate</span>
							<span className="footer-navigation-text">Archive</span>
							<span className="footer-navigation-text">About</span>
							<span className="footer-navigation-text">Shop</span>
						</div>
						<div className="footer-nav-group">
							<span className="footer-title-text">Archive</span>
							<span className="footer-navigation-text">Latest Games</span>
							<span className="footer-navigation-text">Stories</span>
							<span className="footer-navigation-text">Top 5 Games</span>
						</div>
					</div>
				</div>
		
				<div id="footer-bottom-row">
					<div id="footer-credits-text">
					<span className="footer-bottom-text">2026 The 8th Art.</span>
					</div>

					<div id="footer-help-row">
						<span className="footer-bottom-text">SUPPORT</span>
						<span className="footer-bottom-text">TERMS</span>
						<span className="footer-bottom-text">PRIVACY</span>
					</div>
				</div>

			</div>
		</div>
	)
}