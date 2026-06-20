// import { useState } from "react";

// import profileIcon from "/src/assets/icons/profile-icon.svg";
// import favBoardIcon from "/src/assets/icons/board.png";
// import cartIcon from "/src/assets/icons/cart.png";
// import settingsIcon from "/src/assets/icons/settings.png";

// type Tab = "profile" | "fav-boards" | "shopping-cart" | "settings";

export function Profile() {
	// const [activeTab, setActiveTab] = useState<Tab>("profile");

	return <>

		<div id="profile">
			{/* HEADER */}
			<div className="profile__header">
				<h1>Profile</h1>
				<br/>
				<p>work in progress...</p>

				{/* TABS */}
				<div className="profile__tabs">
				{/* 
					<button
						className={`profile__tab ${activeTab === "profile" ? "profile__tab--active" : ""}`}
						onClick={() => setActiveTab("profile")}
					>
					<img src={profileIcon} />
						Main View
					</button>

					<button
						className={`profile__tab ${activeTab === "fav-boards" ? "profile__tab--active" : ""}`}
						onClick={() => setActiveTab("fav-boards")}
					>
						<img src={favBoardIcon} />
						Favorites Board
					</button>

					<button
						className={`profile__tab ${activeTab === "shopping-cart" ? "profile__tab--active" : ""}`}
						onClick={() => setActiveTab("shopping-cart")}
					>
						<img src={cartIcon} />
						Shopping Cart
					</button>

					<button
						className={`profile__tab ${activeTab === "settings" ? "profile__tab--active" : ""}`}
						onClick={() => setActiveTab("settings")}
					>
						<img src={settingsIcon} />
						Settings
					</button>
				*/}
				</div> 

				{/* CONTENT */}
				<div className="profile__content">
					{/* {activeTab === "profile" && (
						<ProfileOverview game={game} />
					)}

					{activeTab === "fav-boards" && (
						<ProfileFavoritesBoards game={game} />
					)}

					{activeTab === "shopping-cart" && (
						<ProfileShoppingCart game={game} />
					)}

					{activeTab === "settings" && (
						<Settings game={game} />
					)} */}
				</div>

			</div>

			{/* BODY */}
			<div className="profile__body">

			</div>
		</div>
	</>
}