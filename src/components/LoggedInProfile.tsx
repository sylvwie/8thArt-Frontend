import profilePicture from "/src/assets/template/propic-template.webp";
import bookmarkIcon from "/src/assets/icons/bookmark.svg";
import cartIcon from "/src/assets/icons/cart.svg";

export function LoggedInProfileBox() {
	return <>
			<div className="HoverProfileBoxWrapper">
				<div className="HoverProfileBoxContainer">
					<div className="HoverProfileBoxHeader">
						<span className="profile-text-box-header">~ Profile</span>
						<span id="loggedStatusText">LOGGED IN</span>
					</div>
					<div className="HoverProfileBoxContent">
						<div className="HoverProfilePropicContainer">
							<img className="profilepicture" src={profilePicture} alt="Profile Picture" />
						</div>
						<div id="loggedProfileBoxSectionsContainer">
							<button> <img src={bookmarkIcon} alt="Bookmark Icon" /> Saves </button>
							<button> <img src={cartIcon} alt="Cart Icon" /> Cart </button>
						</div>
					</div>
				</div>
			</div>
		</>
}