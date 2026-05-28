import { Link } from "react-router-dom";

import aboutIcon from "/src/assets/icons/about.png";
import shopIcon from "/src/assets/icons/shop.png";
import archiveIcon from "/src/assets/icons/archive.png";

export function Navbar() {
	return (
		<nav id="main-nav">
			<Link className="nav-btn" to="/about">
				<img src={aboutIcon} alt="" />
				<span>About</span>
			</Link>

			<Link className="nav-btn" to="/archive">
				<img src={archiveIcon} alt="" />
				<span>Archive</span>
			</Link>

			<Link className="nav-btn" to="/shop">
				<img src={shopIcon} alt="" />
				<span>Shop</span>
			</Link>
		</nav>
	);
}