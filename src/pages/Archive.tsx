import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlatforms } from "../hooks/usePlatforms.tsx";
import { useFilters } from "../hooks/useFilters.tsx";

import { ArchiveSearchBar } from "../components/shared/ArchiveSearchBar.tsx";
import { FeaturedStoriesCard, type FeaturedStoriesShowcase } from "../components/FeaturedStoriesCard";

import mainLogo from "/src/assets/logos/logo.svg";
import arrowLeft from "/src/assets/icons/arrow-left.svg";
import arrowRight from "/src/assets/icons/arrow-right.svg";
import genreImageTemplate from "/src/assets/template/genre-image-template.png";

export function Archive() {

	// FEATURED STORIES
	const cardList: FeaturedStoriesShowcase[] = [
		{ tag: "Y2K", articleTitle: "Y2K Aesthetic: The Retro Future of Gaming", gameCoverImage: "/src/assets/template/card-bg-1.jpg"},
		{ tag: "Posters", articleTitle: "Videogame's Posters: Ads from All Over the World", gameCoverImage: "/src/assets/template/card-bg-2.jpg" },
		{ tag: "Cyberpunk", articleTitle: "Cyberpunk: Exploring Dystopian Futures", gameCoverImage: "/src/assets/template/card-bg-3.jpg" },
		{ tag: "Souls-like", articleTitle: "Souls-like: the Challenging Combat", gameCoverImage: "/src/assets/template/card-bg-4.jpg" },
		{ tag: "Metroidvania", articleTitle: "Metroidvania: The Origins of a Genre", gameCoverImage: "/src/assets/template/card-bg-5.jpg" },
		{ tag: "Survival Horror", articleTitle: "Survival Horror: The Art of Fear and Suspense", gameCoverImage: "/src/assets/template/card-bg-6.jpg" },
		{ tag: "Pokèmon", articleTitle: "Pokèmon: The Evolution of the Iconic Franchise", gameCoverImage: "/src/assets/template/card-bg-7.jpg" },
	];

	// GENRES
	const { filters, loading: filtersLoading, error: filtersError } = useFilters();
	const genres = filters?.genres?.["Genre"] ?? [];

	const VISIBLE_ITEMS = 5;

	const [genreIndex, setGenreIndex] = useState(0);

	const prevGenre = () => {
		setGenreIndex((i) =>
			i > 0 ? i - 1 : genres.length - 1
		);
	};

	const nextGenre = () => {
		setGenreIndex((i) =>
			i < genres.length - 1 ? i + 1 : 0
		);
	};	

	const visibleGenres = Array.from(
		{ length: VISIBLE_ITEMS },
		(_, offset) =>
			genres[
				(genreIndex + offset) % genres.length
			]
	);

	// PLATFORMS
	const navigate = useNavigate();
	const { platforms, loading: platformsLoading, error: platformsError } = usePlatforms();

	return <>

			{/* SEARCH AND LOGO */}
			<div className="archive-page-searchbar-wrapper">
				<img src={mainLogo} alt="Logo" />
				<div className="archive-searchbar-container">
					<ArchiveSearchBar />
				</div>
			</div>

			<div className="archive-wrapper">

			{/* GENRES SECTION */}
			<section className="archive-genre-section">
				{filtersLoading && <div className="archive-genre-loading">Loading...</div>}
				{filtersError && <div className="archive-genre-error">{filtersError}</div>}

				{genres.length > 0 && (
				<div className="archive-genre-carousel">
					{/* arrow left */}
					<img className="arrow-left" src={arrowLeft} alt="left" onClick={prevGenre} style={{ cursor: "pointer" }} />

					<div className="archive-genre-list">
					{visibleGenres.map((genre) => (
						<div
						key={genre}
						className="archive-genre-list-box"
						onClick={() => navigate(`/genre/Genre/${encodeURIComponent(genre)}`)}
						style={{ cursor: "pointer" }}
						>
						<span>{genre}</span>
						<img src={genreImageTemplate} alt={genre} />
						</div>
					))}
					</div>

					{/* arrow right */}
					<img className="arrow-right" src={arrowRight} alt="right" onClick={nextGenre} style={{ cursor: "pointer" }} />
				</div>
				)}

					{/* Carousel Indicators */}
					<div className="archive-carousel-dots">
						{genres.map((_, index) => (
							<button
								key={index}
								className={
									index === genreIndex
										? "archive-dot active"
										: "archive-dot"
								}
								onClick={() => setGenreIndex(index)}
							/>
						))}
					</div>
			</section>

			<hr />

			{/* PLATFORMS SECTION */}
			<section className="platforms-section">
				<div className="archive-platforms-wrapper">
					<div className="archive-section-title">
						<span> PLATFORMS </span>
					</div>

					{platformsLoading && <div className="platforms-loading">Loading...</div>}
					{platformsError && <div className="platforms-error">{platformsError}</div>}

				{/* platforms list */}
					<div className="archive-platforms-list">
						{platforms.map((platform) => (
							<div
								key={platform}
								className="archive-platforms-list-box"
								onClick={() => navigate(`/platform/${encodeURIComponent(platform)}`)}
								style={{ cursor: "pointer" }}
							>
								<span>{platform}</span>
							</div>
						))}
					</div>
				</div>
				
			</section>	

			<hr />

			{/* STORIES SECTION */}
			<section className="stories-section">
				<div className="archive-section-title">
					<span> FEATURED STORIES</span>
					<p> Discover the latest news, insights, and trends in the world of gaming through our curated selection of featured stories.</p>
				</div>
				<div className="featured-stories-row">
					{cardList.map((card, index) => (
						<div className="featuredstoriescard-frame" key={index}>
							<FeaturedStoriesCard story={card} />
						</div>
					))}
				</div>
			</section>	

			<hr />

			{/* TOP 5 SECTION */}
			<section className="top5-section">
				<div className="archive-top5-wrapper">
					<div className="archive-section-title">
						{/* <span> TOP 5 GAMES </span> */}
					</div>
				</div>
			</section>

			</div>
		</>
}