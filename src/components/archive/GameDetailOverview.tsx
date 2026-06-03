import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png"; // temporaneo
import saveIcon from "/src/assets/icons/save-icon.png"; 
import {GameCard} from "./GameCard";
// import saveIconVariant from "/src/assets/icons/save-icon-variant.png"; 

export function GameDetailOverview() {

	return (
		<div className="game-overview">

			{/* MAIN INFO */}

			<div className="game-overview__main">

				{/* LEFT COLUMN */}

				<div className="game-overview__left">

					<div className="game-overview__header">
						<span className="game-overview__game-id">
							GAME ID:
						</span>

						<button className="game-overview__rating">
							★ rate num
						</button>
					</div>

					<div className= "game-overview__blocks"> 
						<div className="game-overview__block">
							<span className="game-overview__label">
								[ GENRE ]
							</span>

							<div className="game-overview__tags">
								<button className="game-overview__tag">genre</button>
								<button className="game-overview__tag">genre</button>
								<button className="game-overview__tag">genre</button>
								<button className="game-overview__tag">genre</button>
							</div>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ PLATFORMS ]
							</span>

							<div className="game-overview__tags">
								<button className="game-overview__tag">platform</button>
								<button className="game-overview__tag">platform</button>
								<button className="game-overview__tag">platform</button>
								<button className="game-overview__tag">platform</button>
							</div>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ DEVELOPER ]
							</span>

							<span className="game-overview__value">
								developer
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ RELEASE ]
							</span>

							<span className="game-overview__value">
								release date
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ DESCRIPTION ]
							</span>

							<p className="game-overview__description">
								description text
							</p>
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
								src=""
								alt="ESRB rating"
							/>

							<ul className="game-overview__esrb-list">
								<li>ESRB RATING 1</li>
								<li>ESRB RATING 2</li>
								<li>ESRB RATING 3</li>
								<li>ESRB RATING 4</li>
								<li>ESRB RATING 5</li>
							</ul>

						</div>
					</div>

					<div className="game-overview__panel">
						<div className="game-overview__panel-header">
							LOGO
						</div>

						<div className="game-overview__panel-body">
							<img
								className="game-overview__logo"
								src=""
								alt="Game logo"
							/>
						</div>
					</div>

				</div>

			</div>

			{/* COVERS */}

			<section className="game-overview__section">

				<h3 className="game-overview__section-title">
					COVERS
				</h3>

				<div className="game-overview__covers-grid">

					<div className="game-overview__cover-card">
						<span>Front Cover</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Inside Cover Left Flap</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Inside Cover Right Flap</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Back Cover</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Side</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Manual Front</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Manual Back</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

					<div className="game-overview__cover-card">
						<span>Physical Game</span>
						<img className="game-overview__cover-image" src={gameCoverTemplate} alt="" />
					</div>

				</div>

			</section>

			{/* SCREENSHOTS */}

			<section className="game-overview__section">

				<h3 className="game-overview__section-title">
					SCREENSHOTS
				</h3>

				<div className="game-overview__screenshots">

					<img
						className="game-overview__arrow game-overview__arrow--left"
						src={arrowLeft}
						alt="previous"
					/>

					<div className="game-overview__screenshots-content">

						<div className="game-overview__screenshot-large-box">
							<img
								className="game-overview__screenshot-large"
								src=""
								alt=""
							/>

							<button className="game-overview__save-button">
								<img src={saveIcon} alt="save" />
							</button>
						</div>

						<div className="game-overview__thumbnails">
							<img className="game-overview__thumbnail" src="" alt="" />
							<img className="game-overview__thumbnail" src="" alt="" />
							<img className="game-overview__thumbnail" src="" alt="" />
							<img className="game-overview__thumbnail" src="" alt="" />
						</div>

					</div>

					<img
						className="game-overview__arrow game-overview__arrow--right"
						src={arrowRight}
						alt="next"
					/>

				</div>

			</section>

			{/* ART BOOK */}

			<section className="game-overview__section">

				<h3 className="game-overview__section-title">
					ART BOOK
				</h3>

				<div className="game-overview__artbook-grid">
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
					<img className="game-overview__artbook-image" src={gameCoverTemplate} alt="" />
				</div>

			</section>

			{/* SIMILAR GAMES */}

			<section className="game-overview__section">

				<h3 className="game-overview__section-title">
					SIMILAR GAMES
				</h3>

				<div className="game-overview__similar-games">
					<GameCard game={{
						rating: "★ 9.4",
						coverImage: gameCoverTemplate,
						title: "Hollow Knight",
						description: "Hollow Knight takes place in the ruined, insectoid kingdom of Hallownest. Its story follows The Knight as they uncover the truth of a supernatural, mind-controlling plague known as the Infection. The kingdom's fall, the origins of the plague, and the Knight's ultimate mission are deeply intertwined",
						genres: ["Metroidvania", "Action", "Adventure"],
						developer: "Team Cherry",
						release: "24-02-2017",
						tags: "Indie"
					}} />
					<GameCard game={{
						rating: "★ 9.5",
						coverImage: gameCoverTemplate,
						title: "Hollow Knight: SilkSong",
						description: "Silksong follows Hornet, the princess-protector of Hallownest, after she is captured and brought to the unfamiliar, song-haunted kingdom of Pharloom. Hornet must ascend to a gilded Citadel to uncover the truth behind her kidnapping, defeat the entity controlling the inhabitants, and ultimately seek her freedom.",
						genres: ["Metroidvania", "Action", "Adventure"],
						developer: "Team Cherry",
						release: "04-09-2025",
						tags: "Indie"
					}} />
				</div>

			</section>

		</div>
	);
}