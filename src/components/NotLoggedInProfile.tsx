import profileplaceholder from "/src/assets/template/profileplaceholder.gif";

export function NotLoggedInProfileBox() {
	return <>
			<div className="HoverProfileBoxWrapper">
				<div className="HoverProfileBoxHeader">
					<span>~ Profile</span>
					<span className="loginStatusText">NOT LOGGED</span>
				</div>
				<div className="HoverProfileBoxContent">
					<div className="HoverProfilePropicContainer">
						<img className="profilepicture" src={profileplaceholder} alt="Profile Picture" />
					</div>
					<div className="profileBoxSectionsContainer">
						<button>Register or Login to access the profile section</button>
					</div>
				</div>
			</div>
		</>
}