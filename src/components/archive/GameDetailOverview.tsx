import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import noImagetemplate from "/src/assets/template/template-no-image.jpg";
import saveIcon from "/src/assets/icons/save-icon.png"; 
// import saveIconVariant from "/src/assets/icons/save-icon-variant.png"; 
import {GameCard} from "./GameCard";

export function GameDetailOverview() {

	return (
		<div className="game-overview">

			{/* MAIN INFO */}

			<div className="game-overview__main">

				{/* LEFT COLUMN */}

				<div className="game-overview__left">

					<div className="game-overview__header">
						<span className="game-overview__game-id">
							 GAME ID: {/* qui va l'id del gioco */}
						</span>

						<button className="game-overview__rating">
							★ rate num {/* qui va l'id del gioco */}
						</button>
					</div>

					<div className= "game-overview__blocks"> 
						<div className="game-overview__block">
							<span className="game-overview__label">
								[ GENRE ]
							</span>

							<div className="game-overview__tags">
								{/* qui vanno i generi del gioco */}
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
								{/* qui vanno le piattaformedel gioco */}
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
								{/* qui vanno il developer */}
								developer
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ RELEASE ]
							</span>

							<span className="game-overview__value">
								{/* qui vanno la data di rilascio */}
								release date
							</span>
						</div>

						<div className="game-overview__block">
							<span className="game-overview__label">
								[ DESCRIPTION ]
							</span>

							<p className="game-overview__description">
								{/* qui va la descrizione del gioco */}
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
								src={noImagetemplate}
								alt="ESRB rating"
							/>

							<ul className="game-overview__esrb-list">
								{/* qui va l'esbr rating del gioco' */}
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
							{/* qui va il logo del gioco */ }
							<img
								className="game-overview__logo"
								src={noImagetemplate}
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
						{/* in ogniuna di queste va la cover */ }
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Front Cover" />
					</div>

					<div className="game-overview__cover-card">
						<span>Inside Cover Left Flap</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Inside Cover Left Flap" />
					</div>

					<div className="game-overview__cover-card">
						<span>Inside Cover Right Flap</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Inside Cover Right Flap" />
					</div>

					<div className="game-overview__cover-card">
						<span>Back Cover</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Back Cover" />
					</div>

					<div className="game-overview__cover-card">
						<span>Side</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Side" />
					</div>

					<div className="game-overview__cover-card">
						<span>Manual Front</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Manual Front" />
					</div>

					<div className="game-overview__cover-card">
						<span>Manual Back</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Manual Back" />
					</div>

					<div className="game-overview__cover-card">
						<span>Physical Game</span>
						<img className="game-overview__cover-image" src={noImagetemplate} alt="Physical Game" />
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
								src={noImagetemplate}
								alt="Large screenshot"
							/>

							<button className="game-overview__save-button">
								<img src={saveIcon} alt="save" />
							</button>
						</div>

						<div className="game-overview__thumbnails">
							<img className="game-overview__thumbnail" src={noImagetemplate} alt="Thumbnail 1" />
							<img className="game-overview__thumbnail" src={noImagetemplate} alt="Thumbnail 2" />
							<img className="game-overview__thumbnail" src={noImagetemplate} alt="Thumbnail 3" />
							<img className="game-overview__thumbnail" src={noImagetemplate} alt="Thumbnail 4" />
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
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 1" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 2" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 3" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 4" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 5" />
					<img className="game-overview__artbook-image" src={noImagetemplate} alt="Art Book 6" />
				</div>

			</section>

			{/* SIMILAR GAMES */}

			<section className="game-overview__section">

				<h3 className="game-overview__section-title">
					SIMILAR GAMES
				</h3>

				<div className="game-overview__similar-games">
					{/* temporanei da sostituire con i game card dinamici */}
					<GameCard game={{
						rating: "★ 9.4",
						coverImage: noImagetemplate,
						title: "Hollow Knight",
						description: "Un cavaliere esplora il regno in rovina di Nidosacro per sconfiggere l'Infezione, una piaga mentale generata dalla dea falena Splendore, sigillandola o distruggendola nel mondo dei sogni.",
						genres: ["Metroidvania", "Action", "Adventure"],
						developer: "Team Cherry",
						release: "24-02-2017",
						tags: "Indie"
					}} />
					<GameCard game={{
						rating: "★ 9.5",
						coverImage: noImagetemplate,
						title: "Hollow Knight: SilkSong",
						description: "Hornet viene catturata e portata nel regno di Pharloom. Per liberarsi e scoprire la verità sul suo rapimento, deve scalare il mondo fino alla Cittadella, affrontando una maledizione legata alla seta e alla musica.",
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