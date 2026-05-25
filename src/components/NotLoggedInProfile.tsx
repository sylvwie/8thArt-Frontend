import { useNavigate } from "react-router-dom";
import profileplaceholder from "/src/assets/template/profileplaceholder.gif";

export function NotLoggedInProfileBox() {
	  const navigate = useNavigate();
	return <>
			<div className="HoverProfileBoxWrapper">
				<div className="HoverProfileBoxContainer">
					<div className="HoverProfileBoxHeader">
						<span className="profile-text-box-header">~ Profile</span>
						<span id="notLoggedStatusText">NOT LOGGED</span>
					</div>
					<div className="HoverProfileBoxContent">
						<div className="HoverProfilePropicContainer">
							<button className="login-redirect-link-button" onClick={() => navigate("/login")}>
								Login to access the profile section
							</button>
							<img className="profilepicture" src={profileplaceholder} alt="Profile Picture" />
						</div>
						<div id="notLoggedProfileBoxSectionsContainer"></div>
					</div>
				</div>
			</div>
		</>
}