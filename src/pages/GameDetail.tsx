import { useParams } from "react-router-dom";

import { GameDetailOverview } from "../components/games/GameDetailOverview";
import { ArchiveSearchBar } from "../components/shared/ArchiveSearchBar";
import { useGameDetail } from "../hooks/useGameDetails";

// import gameCoverTemplate from "/src/assets/template/game-cover-template.png"; // temporaneo
import overviewIcon from "/src/assets/icons/overview-icon.png";
import galleryIcon from "/src/assets/icons/gallery-icon.png";
import shopIcon from "/src/assets/icons/shop-icon.png";

export function GameDetail() {
	const { gameId } = useParams<{ gameId: string }>();
	const { game, loading, error } = useGameDetail(gameId);

  	if (loading) return <p>Loading...</p>;
	if (error || !game) return <p>Game not found.</p>;

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
						src={game.main_cover_url}
            			alt={game.title}
					/>

					<div className="game-detail__header-info">
						<div className="game-detail__title">
							{game.title}
						</div>

						<div className="game-detail__meta">
							Classification: {Object.values(game.genres).flat()[0] ?? "—"} |
							Status: PRESERVED |
							Year: {game.year?.slice(0, 4)}
						</div>
					</div>
				</div>

				{/* BODY */}
				<div className="game-detail__body">

					{/* TABS */}
					<div className="game-detail__tabs">
						<button className="game-detail__tab game-detail__tab--active">
							<img src={overviewIcon} alt="Overview" />
							Overview
						</button>

						<button className="game-detail__tab game-detail__tab--active">
							<img src={galleryIcon} alt="Gallery" />
							Gallery
						</button>

						<button className="game-detail__tab game-detail__tab--active">
							<img src={shopIcon} alt="Shop" />
							Shop
						</button>
					</div>

					{/* CONTENT */}
					<div className="game-detail__content">

						<div className="game-detail__overview">
							<GameDetailOverview game={game} />
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}