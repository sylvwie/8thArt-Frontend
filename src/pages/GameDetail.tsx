import { GameDetailOverview } from "../components/archive/GameDetailOverview";
import { ArchiveSearchBar } from "../components/shared/ArchiveSearchBar";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

export function GameDetail() {
	return (
		<div id="game-detail">
			<div className="archive-searchbar-container">
				<ArchiveSearchBar />
			</div>

			<div className="game-detail__container">

				{/* HEADER */}
				<div className="game-detail__header">
					<img
						className="game-detail__cover"
						src={gameCoverTemplate}
						alt="game cover"
					/>

					<div className="game-detail__header-info">
						<div className="game-detail__title">
							Title
						</div>

						<div className="game-detail__meta">
							Classification: Genre |
							Status: PRESERVED |
							Year: 2007
						</div>
					</div>
				</div>

				{/* BODY */}
				<div className="game-detail__body">

					{/* TABS */}
					<div className="game-detail__tabs">
						<button className="game-detail__tab game-detail__tab--active">
							Overview
						</button>

						<button className="game-detail__tab game-detail__tab--active">
							Gallery
						</button>

						<button className="game-detail__tab game-detail__tab--active">
							Shop
						</button>
					</div>

					{/* CONTENT */}
					<div className="game-detail__content">

						<div className="game-detail__overview">
							<GameDetailOverview />
						</div>

						<div className="game-detail__gallery">
							{/* <GameDetailGallery /> */}
						</div>

						<div className="game-detail__shop">
							{/* <GameDetailShop /> */}
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}