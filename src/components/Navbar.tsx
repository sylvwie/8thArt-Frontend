import { Link } from "react-router-dom";

import crossIcon from "/src/assets/icons/cross-icon.png";
import crossIconHover from "/src/assets/icons/cross-icon-hover.png";

import archiveIcon from "/src/assets/icons/archive.png";
import archiveIconHover from "/src/assets/icons/archive-variant.png";

import shopIcon from "/src/assets/icons/shop.png";
import shopIconHover from "/src/assets/icons/shop-variant.png";

export function Navbar() {
	return (
		<nav id="main-nav">
			<Link className="nav-btn" to="/cross">
				<div className="nav-icon">
					<img className="icon-default" src={crossIcon} alt="About" />
					<img className="icon-hover" src={crossIconHover} alt="About" />
				</div>

				<span>Cross</span>
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