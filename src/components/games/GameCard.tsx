import { useNavigate } from "react-router-dom";
import { ViewGameBtn } from "../shared/ViewGameBtn.tsx";

// Questo è box dei singoli giochi visibile nei dettagli di gioco, sezione games di developer e platforms
type GameCardProps = {
	game: GameInfo;
}

export type GameTag = {
  category: string;
  value: string;
};

export type GameInfo = {
  game_id: number;
  rating: string;
  coverImage: string;
  title: string;
  description: string;
  genres: GameTag[];
  developer: string;          
  developerList?: string[];   
  release: string;
  tags?: string[];
}

export function GameCard({ game }: GameCardProps) {
	const navigate = useNavigate();

	return (
		<div className="gamecard-wrapper">
			<div className="gamecard-container">

				<div id="gamecard-cover-container">
					{/* rating and cover */}
					<button className="gamecard-rating">{game.rating}</button>
					<img className="gamecard-cover" src={game.coverImage} alt="game cover" />
				</div>


				<div id="gamecard-info-container">
					<div id="gamecard-info-overview">
						{/* title and description */}
						<span className="gamecard-title">{game.title}</span>
						<p className="gamecard-description">{game.description}</p>
					</div>

					<div id="game-info-specifics">
						{/* genre */}
						<span className="gamecard-genre">
							{game.genres.map((g, i) => (
								<span key={`${g.category}-${g.value}`}>
									<button
										className="gamecard-genre-link"
										onClick={() => navigate(`/genre/${encodeURIComponent(g.category)}/${encodeURIComponent(g.value)}`)}
									>
										{g.value}
									</button>
									{i < game.genres.length - 1 ? ", " : ""}
								</span>
							))}
						</span>

						{/* developer */}
						{/* developer */}
						<span className="gamecard-developer">
							{game.developerList?.length === 1 ? (
								<button
									className="gamecard-developer-link"
									onClick={() => navigate(`/developer/${encodeURIComponent(game.developerList![0])}`)}
								>
									{game.developer}
								</button>
							) : (
								game.developer
							)}
						</span>

						{/* year */}
						<span className="gamecard-release">{game.release}</span>
						
						{/* tags */}
						<div className="gamecard-tags-container">
							{game.genres.slice(0, 3).map((g) => (
								<button
								key={`${g.category}-${g.value}`}
								className="gamecard-tags"
								onClick={() => navigate(`/genre/${encodeURIComponent(g.category)}/${encodeURIComponent(g.value)}`)}
								>
								{g.value}
								</button>
							))}
						</div>
					</div>
					
					{/* view game button */}
					<div className="view-game-button">
						<ViewGameBtn gameId={game.game_id} />
					</div>
				</div>
			</div>
		</div>
	)
}