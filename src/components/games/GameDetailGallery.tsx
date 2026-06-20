import type { GameDetailProps } from "../props/GameDetailProps";
import type { Screenshot } from "../props/GameDetailProps";
import type { Cover } from "../props/GameDetailProps";

type Props = {
	game: GameDetailProps;
};

export function GameDetailGallery({ game }: Props) {
	const screenshots: Screenshot[] = game.screenshots ?? [];
	const covers: Cover[] = game.covers ?? [];

	return (
		<div id="game-detail__gallery">
			<div className="game-detail__gallery-content">


				{/* SCREENSHOTS */}
				{screenshots.length > 0 && (
					<section className="game-gallery__section">
						<div className="game-gallery__screenshots">
							<div className="game-gallery__screenshots-grid">
									{screenshots.map((s) => (
										<img
											key={s.id}
											className="game-gallery__screenshot"
											src={s.url}
											alt={s.description}
										/>
									))}
							</div>
						</div>
					</section>
				)}

				{/* COVERS */}
				{covers.length > 0 && (
					<section className="game-gallery__section">
						<div className="game-gallery__covers">

							<div className="game-gallery__covers-grid">
								{covers.map((c) => (
									<img
										key={c.id}
										className="game-gallery__cover"
										src={c.url}
										alt={c.description}
									/>
								))}
							</div>
							
						</div>

					</section>
				)}

			</div>
		</div>
	)
}

// add a save button + a preview box

// on every preview box:
{/* save icon to add 1. btn variant hover style + 2. saved/not saved style and states */}
{/* <button className="game-gallery__save-button-hover">
	<img
		src={saveIcon}
		// src={saveIconVariant}
		alt="save"
	/>
</button> */}