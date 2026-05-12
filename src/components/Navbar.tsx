import { Link } from "react-router-dom";

export function Navbar() {
	return <>
			<nav id="main-nav">
				<ul>
					<li className="btn"><Link to={'/shop'}>Shop</Link></li>
					<li className="btn"><Link to={'/archive'}>Archive</Link></li>
					<li className="btn"><Link to={'/about'}>About</Link></li>
				</ul>
			</nav>
		</>
}