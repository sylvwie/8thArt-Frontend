import { Link } from "react-router-dom";
import LogoIcon from "/src/assets/logos/logo.svg";
import IedLogo from "/src/assets/logos/ied-logo.svg";
import FivezerofiveGamesLogo from "/src/assets/logos/505-games-logo.svg";
import dither from "/src/assets/template/dither.mp4";

export function Footer() {
	return (
		<div id="footer">
			<video id="footer-dither" src={dither} muted loop autoPlay playsInline={true}></video>
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
							<Link to="/cross">
								<span className="footer-navigation-text">
									Cross
								</span>
							</Link>
							<Link to="/archive">
								<span className="footer-navigation-text">
									Archive
								</span>
							</Link>
							<Link to="/shop">
								<span className="footer-navigation-text">
									Shop
								</span>
							</Link>
							<Link to="/about">
								<span className="footer-navigation-text">
									About
								</span>
							</Link>
						</div>
						<div className="footer-nav-group">
							<span className="footer-title-text">Archive</span>
							<Link to="/archive">
								<span className="footer-navigation-text">
									Genres
								</span>
							</Link>
							<Link to="/archive">
								<span className="footer-navigation-text">
									Platforms
								</span>
							</Link>
							<Link to="/archive">
								<span className="footer-navigation-text">
									Developers
								</span>
							</Link>
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