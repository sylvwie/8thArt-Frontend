import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";
import { NotLoggedInProfileBox } from "./NotLoggedInProfile";

import Logoo from "/src/assets/logos/logo.svg";

import ProfileIcon from "/src/assets/icons/profile-icon.png";
import ProfileIconVariant from "/src/assets/icons/profile-icon-variant.png";

export function Header() {
	
	const [profileBoxOpen, setProfileBoxOpen] = useState(false);

	return (
		<>
			<header>
				<Link id="header-logo" to="/">
					<span>_8thart v1.0.0</span>
					<img id="header-logo-img" src={Logoo} alt="Logo" />
				</Link>

				<Navbar />

				<div
					id="profile-btn-wrapper"
					onMouseEnter={() => setProfileBoxOpen(true)}
					onMouseLeave={() => setProfileBoxOpen(false)}
				>	
					{/* Link is disabled. Remember to delete div "profile-btn-container" before enabling Link again*/}

					{/* <Link id="profile-btn-container" to="/profile"> */}
					<div id="profile-btn-container">

						<div className="profile-icon">
							<img
								className="icon-default"
								src={ProfileIcon}
								alt="Profile"
							/>

							<img
								className="icon-hover"
								src={ProfileIconVariant}
								alt="Profile"
							/>
						</div>

						<span>Profile</span>
						
					</div>
					{/* </Link> */}

					{profileBoxOpen && (
						<div className="profile-dropdown">
							<NotLoggedInProfileBox />
						</div>
					)}
				</div>
			</header>
		</>
	);
}