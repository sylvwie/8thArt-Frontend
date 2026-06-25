import { useShowcaseStore } from "../store/useShowcaseStore";

import cardBg1 from "/src/assets/template/card-bg-1.jpg";
import cardBg2 from "/src/assets/template/card-bg-2.jpg";
import cardBg3 from "/src/assets/template/card-bg-3.jpg";
import cardBg4 from "/src/assets/template/card-bg-4.jpg";
import cardBg5 from "/src/assets/template/card-bg-5.jpg";
import cardBg6 from "/src/assets/template/card-bg-6.jpg";
import cardBg7 from "/src/assets/template/card-bg-7.jpg";

import { FeaturedStoriesCard, type FeaturedStoriesShowcase } from "../components/FeaturedStoriesCard";
import { SuggestedGames } from "../components/SuggestedGames";
import { ArchiveSearch } from "../components/ArchiveSearch";
import { CrossSearchBox } from "../components/crossreference/CrossSearchUpload";
import { CrossSearchScanning } from "../components/crossreference/CrossSearchScanning";
import { CrossSearchResult } from "../components/crossreference/CrossSearchResult";
import { Link } from "react-router-dom";

export function Dashboard() {

	const view = useShowcaseStore((s) => s.view);
	const hideSuggestedGames = useShowcaseStore((s) => s.ui.hideSuggestedGames);

	const cardList: FeaturedStoriesShowcase[] = [
		{ tag: "Y2K", articleTitle: "Y2K Aesthetic: The Retro Future of Gaming", gameCoverImage: cardBg1 },
		{ tag: "Posters", articleTitle: "Videogame's Posters: Ads from All Over the World", gameCoverImage: cardBg2 },
		{ tag: "Cyberpunk", articleTitle: "Cyberpunk: Exploring Dystopian Futures", gameCoverImage: cardBg3 },
		{ tag: "Souls-like", articleTitle: "Souls-like: the Challenging Combat", gameCoverImage: cardBg4 },
		{ tag: "Metroidvania", articleTitle: "Metroidvania: The Origins of a Genre", gameCoverImage: cardBg5 },
		{ tag: "Survival Horror", articleTitle: "Survival Horror: The Art of Fear and Suspense", gameCoverImage: cardBg6 },
		{ tag: "Pokèmon", articleTitle: "Pokèmon: The Evolution of the Iconic Franchise", gameCoverImage: cardBg7 },
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
			
			{/* ABOUT US */}
			<div id="about-dashboard-wrapper">
				<span id="motto"> The 8th Art's archive dedicated to preserving the visual soul of video games </span>
				<Link to="/about">
					<button> ABOUT US </button>
				</Link>
			</div>

			<div id="homepage-content-section">
				{/* FEATURED STORIES */}
				<div className="featuredstoriescard-title-text-container">
					<span id="featuredstoriescard-title-text">FEATURED STORIES</span>
					<span id="featuredstoriescard-title-desc">Curated narratives exploring gaming's most compelling worlds</span>
				</div>

				<div className="featured-stories-row">
					{cardList.map((story, index) => (
						<div className="featuredstoriescard-frame" key={index}>
							<FeaturedStoriesCard
								story={story}
								index={index}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	</>
}