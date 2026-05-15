import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"

export function Header() {
	return <>
			<header>
				<li ><Link to={'/dashboard'}>&gt;_8thart v1.0.0</Link></li> 
				<Navbar/> 
				<li className="btn"><Link to={'/profile'}>Profile</Link></li>
			</header>
		</>
}