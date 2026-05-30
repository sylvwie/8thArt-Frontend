import { useShowcaseStore } from "../store/useShowcaseStore";
import gameCoverTemplate from "/src/assets/template/game-cover-template.png";

import { FeaturedStoriesCard, type FeaturedStoriesShowcase } from "../components/FeaturedStoriesCard";
import { SuggestedGames } from "../components/SuggestedGames";

import { ArchiveSearch } from "../components/ArchiveSearch";
import { CrossSearchBox } from "../components/crossreference/CrossSearchUpload";
import { CrossSearchScanning } from "../components/crossreference/CrossSearchScanning";
import { CrossSearchResult } from "../components/crossreference/CrossSearchResult";

export function Dashboard() {

	const view = useShowcaseStore((s) => s.view);
	const hideSuggestedGames = useShowcaseStore((s) => s.ui.hideSuggestedGames);

	const cardList: FeaturedStoriesShowcase[] = [
		{ tag: "Y2K", articleTitle: "Y2K Aesthetic: The Retro-Future of Gaming", gameCoverImage: gameCoverTemplate },
		{ tag: "Cyberpunk", articleTitle: "Cyberpunk: Exploring Dystopian Futures", gameCoverImage: gameCoverTemplate },
		{ tag: "Souls-like", articleTitle: "Souls-like: the Challenging Combat", gameCoverImage: gameCoverTemplate },
		{ tag: "Lo-fi", articleTitle: "Lo-fi Games: The Art of Chiptune and Nostalgia", gameCoverImage: gameCoverTemplate },
		{ tag: "Survival Horror", articleTitle: "Survival Horror: The Art of Fear and Suspense", gameCoverImage: gameCoverTemplate },
		{ tag: "Pixel Art", articleTitle: "Pixel Art Games: The Charm of Retro Graphics", gameCoverImage: gameCoverTemplate },
	];

	return <>

		<div>
			<div id="main-showcase">
				<div className="showcase-center">

				{view.screen === "archive-search" && <ArchiveSearch />}

				{view.screen === "cross-search" && (
					<>
						{view.step === "uploading" && <CrossSearchBox />}
						{view.step === "scanning" && <CrossSearchScanning />}
						{view.step === "result" && <CrossSearchResult />}
					</>
				)}

			</div>
				<div className="showcase-side">
					{!hideSuggestedGames && (
						<>
							<SuggestedGames />
							<SuggestedGames />
							<SuggestedGames />
						</>
					)}
				</div> 
			</div>

			<hr />

			<div id="homepage-content-section">
				<div className="featuredstoriescard-title-text-container">
					<span id="featuredstoriescard-title-text">&gt;_FEATURED STORIES</span>
					<span id="featuredstoriescard-title-desc">Curated narratives exploring gaming's most compelling worlds</span>
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