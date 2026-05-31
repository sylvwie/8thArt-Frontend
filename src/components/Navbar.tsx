import { Link } from "react-router-dom";

import aboutIcon from "/src/assets/icons/about.png";
import aboutIconHover from "/src/assets/icons/about-variant.png";

import archiveIcon from "/src/assets/icons/archive.png";
import archiveIconHover from "/src/assets/icons/archive-variant.png";

import shopIcon from "/src/assets/icons/shop.png";
import shopIconHover from "/src/assets/icons/shop-variant.png";

export function Navbar() {
	return (
		<nav id="main-nav">
			<Link className="nav-btn" to="/about">
				<div className="nav-icon">
					<img className="icon-default" src={aboutIcon} alt="About" />
					<img className="icon-hover" src={aboutIconHover} alt="About" />
				</div>

				<span>About</span>
			</Link>

			<Link className="nav-btn" to="/archive">
				<div className="nav-icon">
					<img className="icon-default" src={archiveIcon} alt="Archive" />
					<img className="icon-hover" src={archiveIconHover} alt="Archive" />
				</div>

				<span>Archive</span>
			</Link>

			<Link className="nav-btn" to="/shop">
				<div className="nav-icon">
					<img className="icon-default" src={shopIcon} alt="Shop" />
					<img className="icon-hover" src={shopIconHover} alt="Shop" />
				</div>

				<span>Shop</span>
			</Link>
		</nav>
	);
}