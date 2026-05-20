import profilePlaceholder from "/src/assets/template/profileplaceholder.gif";

export function NotLoggedInProfileBox() {
	return <>
			<div id="NotLoggedInProfileBoxWrapper">
				<div id="NotLoggedInProfileBoxHeader">
					<span>~</span>
					<span>/</span>
					<span>home</span>
					<span>/</span>
					<span className="directoryLink">profile</span>

					<span className="loginStatusText">NOT LOGGED</span>
				</div>
				<div id="NotLoggedInProfileBoxContainer">
					<div className="NotLoggedInPlaceholderContainer">
						<img id="profileplaceholder" src={profilePlaceholder} alt="Profile Placeholder" />
					</div>
					<div className="createAccountTextContainer">
						<span>Create an account or Login</span>
					</div>
				</div>
			</div>
		</>
}