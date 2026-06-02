import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";
import { NotLoggedInProfileBox } from "./NotLoggedInProfile";

import ProfileIcon from "/src/assets/icons/profile-icon.svg";
import ProfileIconVariant from "/src/assets/icons/profile-icon-variant.png";
// import ProfileIcon from "/src/assets/icons/profile-icon.png";
// import ProfileIconVariant from "/src/assets/icons/profile-icon-variant.svg";

export function Header() {
	const [profileBoxOpen, setProfileBoxOpen] = useState(false);

	return (
		<>
			<header>
				<Link id="header-logo" to="/">
					&gt;_8thart v1.0.0
				</Link>

				<Navbar />

				<div
					id="profile-btn-wrapper"
					onMouseEnter={() => setProfileBoxOpen(true)}
					onMouseLeave={() => setProfileBoxOpen(false)}
				>
					<Link id="profile-btn-container" to="/profile">
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
					</Link>

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