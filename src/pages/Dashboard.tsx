import { ArchiveSearch } from "../components/ArchiveSearch";
import { FeaturedStoriesCard, type FeaturedStoriesShowcase } from "../components/FeaturedStoriesCard";
import { SuggestedGames } from "../components/SuggestedGames";

export function Dashboard() {

	const cardList: FeaturedStoriesShowcase[] = [
		{ tag: "Y2K", articleTitle: "Y2K Aesthetic: The Retro-Future of Gaming", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
		{ tag: "Cyberpunk", articleTitle: "Cyberpunk: Exploring Dystopian Futures", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
		{ tag: "Souls-like", articleTitle: "Souls-like: the Challenging Combat", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
		{ tag: "Lo-fi", articleTitle: "Lo-fi Games: The Art of Chiptune and Nostalgia", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
		{ tag: "Survival Horror", articleTitle: "Survival Horror: The Art of Fear and Suspense", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
		{ tag: "Pixel Art", articleTitle: "Pixel Art Games: The Charm of Retro Graphics", gameCoverImage: 'https://www.mobygames.com/images/covers/{gameCoverImage}' },
	];

	return <>

		<div>
			<div id="main-showcase">
				<div className="showcase-center">
					<ArchiveSearch />
				</div>
				<div className="showcase-side">
					<SuggestedGames />
					<SuggestedGames />
					<SuggestedGames />
				</div> 
			</div>

			<hr />

			<div id="homepage-content-section">
				<div className="featuredstoriescard-title-text-container">
					<span id="featuredstoriescard-title-text">
						&gt;_FEATURED STORIES
					</span>

					<span id="featuredstoriescard-title-desc">
						Curated narratives exploring gaming's most compelling worlds
					</span>
				</div>

				<div className="featured-stories-row">
					{cardList.map((card, index) => (
						<div className="featuredstoriescard-frame" key={index}>
							<FeaturedStoriesCard story={card} />
						</div>
					))}
				</div>
			</div>
		</div>
	</>
}