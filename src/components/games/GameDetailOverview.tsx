import { useState } from "react";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import noImagetemplate from "/src/assets/template/template-no-image.jpg";
import saveIcon from "/src/assets/icons/save-icon.png";
// import saveIconVariant from "/src/assets/icons/save-icon-variant.png"; 

// import { GameCard } from "./GameCard";
import type { GameDetailProps } from "../props/GameDetailProps";
import type { Cover, Screenshot } from "../props/GameDetailProps";


// UTILITIES 
const filterCovers = (covers: Cover[], keyword: string) =>
	covers.filter((c) =>
		(c.description ?? "")
			.toLowerCase()
			.includes(keyword.toLowerCase())
	);

type Props = {
	game: GameDetailProps;
};

export function GameDetailOverview({ game }: Props) {
	
	const [screenshotIndex, setScreenshotIndex] = useState(0);

	const genreList = Object.values(game.genres ?? {}).flat();

	// const similarGames =
	// 	game.similar_games?.map((g) => ({
	// 		game_id: g.game_id,

	// 		rating:
	// 			g.moby_score > 0
	// 				? g.moby_score.toFixed(1)
	// 				: "N/A",

	// 		coverImage:
	// 			g.main_cover_url ||
	// 			noImagetemplate,

	// 		title: g.title,

	// 		description:
	// 			g.description_short ??
	// 			"No description available.",

	// 		genres:
	// 			Object.values(g.genres ?? {}).flat(),

	// 		developer:
	// 			g.developers?.join(", ") ||
	// 			"Unknown",

	// 		release: g.year,
	// 	})) ?? [];

	// Covers
	const frontCovers = filterCovers(game.covers, "Front Cover");
	const backCovers = filterCovers(game.covers, "Back Cover");
	const insideLeft = filterCovers(game.covers, "Inside Cover Left");
	const insideRight = filterCovers(game.covers, "Inside Cover Right");
	const sides = filterCovers(game.covers, "Spine");
	const manualFront = filterCovers(game.covers, "Manual Front");
	const manualBack = filterCovers(game.covers, "Manual Back");
	const media = filterCovers(game.covers, "Media");

	const screenshots: Screenshot[] = game.screenshots ?? [];
	const hasScreens = screenshots.length > 0;

	const currentScreenshot = hasScreens
		? screenshots[screenshotIndex]
		: null;

	const prevScreenshot = () => {
		if (!hasScreens) return;
		setScreenshotIndex((i) =>
			i > 0 ? i - 1 : screenshots.length - 1
		);
	};

	const nextScreenshot = () => {
		if (!hasScreens) return;
		setScreenshotIndex((i) =>
			i < screenshots.length - 1 ? i + 1 : 0
		);
	};
	// Thumbnails
	const thumbnailIndices = hasScreens
		? [0, 1, 2, 3].map(
			(offset) =>
				(screenshotIndex + offset) % screenshots.length
		)
		: [];

	return (
		<div className="game-overview">

			{/* MAIN INFO */}

			<div className="game-overview__main">

				{/* LEFT COLUMN */}

				<div className="game-overview__left">

					<div className="game-overview__header">
						<span className="game-overview__game-id">
							GAME ID: {game.game_id}
						</span>

						{game.moby_score > 0 && (
							<button className="game-overview__rating">
								★ {game.moby_score}
							</button>
						)}
					</div>

					<div className="game-overview__blocks">
						<div className="game-overview__block">
							<span className="game-overview__label">
								[ GENRES ]
							</span>

							<div className="game-overview__tags">
								{genreList.map((g) => (
									<button key={g} className="game-overview__tag">{g}</button>
								))}
							</div>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ PLATFORMS ]
							</span>

							<div className="game-overview__tags">
								{game.platforms.map((p) => (
									<button key={p} className="game-overview__tag">{p}</button>
								))}
							</div>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ DEVELOPER ]
							</span>

							<span className="game-overview__value">
								{game.developers.length > 0 ? game.developers.join(", ") : "Unknown"}
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ PUBLISHER ]</span>
							<span className="game-overview__value">
								{game.publishers.join(", ")}
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ RELEASE ]
							</span>
							<span className="game-overview__value">{game.year}</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ DESCRIPTION ]
							</span>
							<p className="game-overview__description">{game.description}</p>
						</div>

					</div>
				</div>

				{/* RIGHT COLUMN */}

				<div className="game-overview__right">

					<div className="game-overview__panel">
						<div className="game-overview__panel-header">
							ESRB RATING
						</div>

						<div className="game-overview__panel-body">

							<img
								className="game-overview__esrb-image"
								src={noImagetemplate}
								alt="ESRB rating"
							/>

							<ul className="game-overview__esrb-list">
								{game.esrb_rating
									? <li>{game.esrb_rating}</li>
									: <li>Not rated</li>
								}
							</ul>

						</div>
					</div>

					<div className="game-overview__panel">
						<div className="game-overview__panel-header">
							LOGO
						</div>

						<div className="game-overview__panel-body">
							{/* LOGO */}
							<img
								className="game-overview__logo"
								// src={game.covers[1]?.url || noImagetemplate}
								src={noImagetemplate}
								alt="Game logo"
							/>
						</div>
					</div>

				</div>

			</div>

			{/* COVERS */}
			<section className="game-overview__section">
				<h3 className="game-overview__section-title">COVERS</h3>
				<div className="game-overview__covers-grid">

					{[
						{ label: "Front Cover", items: frontCovers },
						{ label: "Inside Cover Left", items: insideLeft },
						{ label: "Inside Cover Right", items: insideRight },
						{ label: "Back Cover", items: backCovers },
						{ label: "Manual Front", items: manualFront },
						{ label: "Manual Back", items: manualBack },
						{ label: "Media", items: media },
						{ label: "Sides", items: sides },
					]
						.filter(({ items }) => items.length > 0)
						.map(({ label, items }) => (
							<div
								key={label}
								className={`game-overview__cover-card${label === "Sides" ? " game-overview__cover-card--spine" : ""}`}
							>
								{label !== "Sides" && <span>{label}</span>}

								<img
									className="game-overview__cover-image"
									src={items[0].url}
									alt={label}
								/>
							</div>
						))
					}

				</div>
			</section>

			{/* SCREENSHOTS */}
			{screenshots.length > 0 && (
				<section className="game-overview__section">
					<h3 className="game-overview__section-title">SCREENSHOTS</h3>
					<div className="game-overview__screenshots">

						<img
							className="game-overview__arrow game-overview__arrow--left"
							src={arrowLeft}
							alt="previous"
							onClick={prevScreenshot}
							style={{ cursor: "pointer" }}
						/>

						<div className="game-overview__screenshots-content">
							<div className="game-overview__screenshot-large-box">
								{currentScreenshot && (
									<img
										className="game-overview__screenshot-large"
										src={currentScreenshot.url}
										alt={currentScreenshot.description}
									/>
								)}

								{/* save icon */}
								<button className="game-overview__save-button">
									<img
										src={saveIcon}
										alt="save"
									/>
								</button>

								{/* aggiungere variant click e hover */}
								{/* <button className="game-overview__save-button-hover">
									<img
										src={saveIconVariant}
										alt="save"
									/>
								</button> */}
							</div>

							<div className="game-overview__thumbnails">
								{thumbnailIndices.map((idx) => {
									const s = screenshots[idx];
									return s ? (
										<img
											key={s.id}
											className="game-overview__thumbnail"
											src={s.url}
											alt={s.description}
											onClick={() => setScreenshotIndex(idx)}
											style={{ cursor: "pointer" }}
										/>
									) : null;
								})}
							</div>
						</div>

						<img
							className="game-overview__arrow game-overview__arrow--right"
							src={arrowRight}
							alt="next"
							onClick={nextScreenshot}
							style={{ cursor: "pointer" }}
						/>

					</div>
				</section>
			)}

			{/* ART BOOK */}

			{/* <section className="game-overview__section">

				<h3 className="game-overview__section-title">
					ART BOOK
				</h3>

				<div className="game-overview__artbook-grid">
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 1" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 2" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 3" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 4" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 5" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 6" />
				</div>

			</section> */}

			{/* SIMILAR GAMES */}

			{/* <section className="game-overview__section">

				<h3 className="game-overview__section-title">
					SIMILAR GAMES
				</h3>
				<div className="game-overview__similar-games">
					
					{similarGames.map((similar) => (
						<GameCard
							key={similar.game_id}
							game={similar}
						/>
					))}

				</div>
				
			</section> */}

		</div>
	);
}