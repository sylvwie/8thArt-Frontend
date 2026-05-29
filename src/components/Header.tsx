import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { useState } from "react";
import { NotLoggedInProfileBox } from "./NotLoggedInProfile";
// import { LoggedInProfileBox } from "./LoggedInProfile";

export function Header() {
const [profileBoxOpen, setProfileBoxOpen] = useState(false);
	return <>
			<header>
				<li ><Link to={'/dashboard'}>&gt;_8thart v1.0.0</Link></li> 
				<Navbar/> 

				<li
					className="btn profile-wrapper"
						onMouseEnter={() => setProfileBoxOpen(true)}
						onMouseLeave={() => setProfileBoxOpen(false)}
				>
					<Link to={'/profile'}>Profile</Link>

					{profileBoxOpen && (
						<div className="profile-dropdown">
							<NotLoggedInProfileBox />
						</div>
					)}
				</li>
			</header>
		</>
}

