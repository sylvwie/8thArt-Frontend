import profilePicture from "/src/assets/template/profileplaceholder.gif";
import bookmarkIcon from "/src/assets/icons/bookmark.svg";
import cartIcon from "/src/assets/icons/cart.svg";

export function LoggedInProfileBox() {
	return <>
			<div className="HoverProfileBoxWrapper">
				<div className="HoverProfileBoxHeader">
					<span>~ Profile</span>
					<span className="loginStatusText">LOGGED IN</span>
				</div>
				<div className="HoverProfileBoxContent">
					<div className="HoverProfilePropicContainer">
						<img className="profilepicture" src={profilePicture} alt="Profile Picture" />
					</div>
					<div className="profileBoxSectionsContainer">
						<button> <img src={bookmarkIcon} alt="Bookmark Icon" /> Saves</button>
						<button> <img src={cartIcon} alt="Cart Icon" /> Cart</button>
					</div>
				</div>
			</div>
		</>
}