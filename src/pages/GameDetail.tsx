import { useState } from "react";
import { useParams } from "react-router-dom";

import { ArchiveSearchBar } from "../components/shared/ArchiveSearchBar";
import { useGameDetail } from "../hooks/useGameDetails";
import { GameDetailOverview } from "../components/games/GameDetailOverview";
import { GameDetailGallery } from "../components/games/GameDetailGallery";
import { GameDetailShop } from "../components/games/GameDetailShop";

import overviewIcon from "/src/assets/icons/overview-icon.png";
import galleryIcon from "/src/assets/icons/gallery-icon.png";
import shopIcon from "/src/assets/icons/shop-icon.png";

type Tab = "overview" | "gallery" | "shop";

export function GameDetail() {
	const { gameId } = useParams<{ gameId: string }>();

	const { game, loading, error } = useGameDetail(gameId);

	const [activeTab, setActiveTab] = useState<Tab>("overview");

	if (loading) return <p>Loading...</p>;
	if (error || !game) return <p>Game not found.</p>;

	return (
		<div id="game-detail">
			<ArchiveSearchBar />

			<div className="game-detail__container">

				{/* HEADER */}
				<div className="game-detail__header">
					<img
						className="game-detail__cover"
						src={game.main_cover_url}
						alt={game.title}
					/>

					<div className="game-detail__header-info">
						<div className="game-detail__title">{game.title}</div>

						<div className="game-detail__meta">
							Classification: {Object.values(game.genres).flat()[0] ?? "—"} |
							Status: PRESERVED |
							Year: {game.year?.slice(0, 4)}
						</div>
					</div>
				</div>

				{/* BODY */}
				<div className="game-detail__body">

					{/* TABS (UNICO SISTEMA) */}
					<div className="game-detail__tabs">
						<button
							className={`game-detail__tab ${activeTab === "overview" ? "game-detail__tab--active" : ""}`}
							onClick={() => setActiveTab("overview")}
						>
							<img src={overviewIcon} />
							Overview
						</button>

						<button
							className={`game-detail__tab ${activeTab === "gallery" ? "game-detail__tab--active" : ""}`}
							onClick={() => setActiveTab("gallery")}
						>
							<img src={galleryIcon} />
							Gallery
						</button>

						<button
							className={`game-detail__tab ${activeTab === "shop" ? "game-detail__tab--active" : ""}`}
							onClick={() => setActiveTab("shop")}
						>
							<img src={shopIcon} />
							Shop
						</button>
					</div>

					{/* CONTENT */}
					<div className="game-detail__content">
						{activeTab === "overview" && (
							<GameDetailOverview game={game} />
						)}

						{activeTab === "gallery" && (
							<GameDetailGallery game={game} />
						)}

						{activeTab === "shop" && (
							<GameDetailShop game={game} />
						)}
					</div>

				</div>
			</div>
		</div>
	);
}