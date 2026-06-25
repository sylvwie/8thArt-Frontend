import { useNavigate } from "react-router-dom";
import { useState } from "react";

import heroImage from "/src/assets/stories/story2/story2-banner.png";
import icon from "/src/assets/stories/story2/story2-icon.jpg";
import backArrow from "/src/assets/icons/arrow-left.png";

import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import saveIcon from "/src/assets/icons/save-icon.png";

import screen1 from "/src/assets/stories/story2/screens/story2-img1.png";
import screen2 from "/src/assets/stories/story2/screens/story2-img2.png";
import screen3 from "/src/assets/stories/story2/screens/story2-img3.png";
import screen4 from "/src/assets/stories/story2/screens/story2-img4.png";
import screen5 from "/src/assets/stories/story2/screens/story2-img5.png";
import screen6 from "/src/assets/stories/story2/screens/story2-img6.png";
import screen7 from "/src/assets/stories/story2/screens/story2-img7.png";
import screen8 from "/src/assets/stories/story2/screens/story2-img8.png";
import screen9 from "/src/assets/stories/story2/screens/story2-img9.png";
import screen10 from "/src/assets/stories/story2/screens/story2-img10.png";
import screen11 from "/src/assets/stories/story2/screens/story2-img11.png";
import screen12 from "/src/assets/stories/story2/screens/story2-img12.png";
import screen13 from "/src/assets/stories/story2/screens/story2-img13.png";

import gamecube1 from "/src/assets/stories/story2/gamecube/story2-gamecube1.png";
import gamecube2 from "/src/assets/stories/story2/gamecube/story2-gamecube2.png";
import gamecube3 from "/src/assets/stories/story2/gamecube/story2-gamecube3.png";
import gamecube4 from "/src/assets/stories/story2/gamecube/story2-gamecube4.png";
import gamecube5 from "/src/assets/stories/story2/gamecube/story2-gamecube5.png";

import xbox1 from "/src/assets/stories/story2/xbox/story2-xbox1.png";
import xbox2 from "/src/assets/stories/story2/xbox/story2-xbox2.png";
import xbox3 from "/src/assets/stories/story2/xbox/story2-xbox3.png";
import xbox4 from "/src/assets/stories/story2/xbox/story2-xbox4.png";

import ps21 from "/src/assets/stories/story2/ps2/story2-ps2-1.png";
import ps22 from "/src/assets/stories/story2/ps2/story2-ps2-2.png";
import ps23 from "/src/assets/stories/story2/ps2/story2-ps2-3.png";
import ps24 from "/src/assets/stories/story2/ps2/story2-ps2-4.png";
import ps25 from "/src/assets/stories/story2/ps2/story2-ps2-5.png";

function PlatformCarousel({ posters }: { posters: string[] }) {
    const [index, setIndex] = useState(0);
    const total = posters.length;

    if (total === 0) return null;

    const prevScreenshot = () => {
        setIndex((i) => (i > 0 ? i - 1 : total - 1));
    };

    const nextScreenshot = () => {
        setIndex((i) => (i < total - 1 ? i + 1 : 0));
    };

    const thumbnailIndices = [0, 1, 2, 3].map((offset) => (index + offset) % total);

    return (
        <section className="game-overview__section-story2">
            <div className="game-overview__screenshots">
                <img
                    className="game-overview__arrow game-overview__arrow--left"
                    src={arrowLeft}
                    alt="previous"
                    onClick={prevScreenshot}
                />

                <div className="game-overview__screenshots-content">
                    <div className="game-overview__screenshot-large-box">
                        <img
                            className="game-overview__screenshot-large"
                            src={posters[index]}
                            alt=""
                        />
                        <button className="game-overview__save-button">
                            <img src={saveIcon} alt="save" />
                        </button>
                    </div>

                    <div className="game-overview__thumbnails">
                        {thumbnailIndices.map((idx) => (
                            <img
                                key={idx}
                                className="game-overview__thumbnail"
                                src={posters[idx]}
                                alt=""
                                onClick={() => setIndex(idx)}
								style={{ cursor: "pointer" }}
                            />
                        ))}
                    </div>

                    <div id="screenshoots-number">
                        {index + 1} / {total}
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
    );
}

export default function FeaturedStory2() {
	const navigate = useNavigate();


    const screenshots = [
        screen1, screen2, screen3, screen4, screen5, screen6, screen7,
        screen8, screen9, screen10, screen11, screen12, screen13
    ];

    const gamecubePosters = [gamecube1, gamecube2, gamecube3, gamecube4, gamecube5];
    const xboxPosters = [xbox1, xbox2, xbox3, xbox4];
    const ps2Posters = [ps21, ps22, ps23, ps24, ps25];

    return (
        <div className="featured-story-page-2">
            <div>
                <section className="featured-story-hero">
                    <button className="featured-story-back" onClick={() => navigate(-1)}>
                        <img src={backArrow} alt="Back" />
                        [BACK]
                    </button>
                    <img
                        className="featured-story-hero-image"
                        src={heroImage}
                        alt="Featured Story Hero"
                    />
                    <div className="featured-story-hero-overlay">
                        <h1>Stories Card</h1>
                    </div>
                </section>

                <section className="featured-story-card">
                    <img
                        className="featured-story-card-image"
                        src={icon}
                        alt="Featured Story Card"
                    />
                    <div className="featured-story-card-info">
                        <span className="featured-story-card-title">Videogames Posters</span>
                        <span className="featured-story-card-subtitle">Collection of the best videogames posters</span>
                    </div>
                </section>
            </div>

            <section className="featured-story-content">
                <div className="featured-story-section-header">
                    <h2> Videogame’s Poster: The best around the world </h2>
                    <p>Curated narratives exploring gaming's most compelling worlds</p>
                </div>

                <div className="featured-story-overview">
                    <div className="overview-card overview-card--overview-container">
                        <div className="overview-card overview-card--palette"></div>
                        <div className="overview-card overview-card--synopsis">
                            <h3>[ SYNOPSIS ]</h3>
                            <p>
								Video game posters are more than just promotional material; they are the tangible interface between virtual worlds and reality. This gallery is a curated tribute to the visual identity of gaming culture. From the nostalgic, hand-drawn box art of the 80s and 90s to the sleek, minimalist vector designs of modern indie hits, game posters capture the atmosphere, characters, and stories that define generations of players. Whether it’s official key art or limited-edition screenprints, this is where interactive digital art meets high-quality physical print.
                            </p>
                        </div>
                        <div className="overview-card overview-card--style-columns">
                            <div className="overview-card overview-card--style-column">
                                <span>[ The Posters Mastermind ]</span>
                                <div className="overview-card overview-card--style-column-list">
                                    <ul>
                                        <li>[The Collector's Edge]: Limited-edition screenprints, numbered gallery runs, and premium archival paper that turn digital memories into physical fine art.</li>
                                        <li>[Concept to Canvas]: Showcasing early production sketches, rare developer concept art, and atmospheric world-building illustrations that never made it into the final game box.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="overview-card overview-card--style-column">
                                <span>[ Symphony of Scale ]</span>
                                <div className="overview-card overview-card--style-column-list">
                                    <ul>
                                        <li>[The Indie Wave]: Celebrating the bold, experimental, and avant-garde art styles of independent games, heavily inspired by lo-fi aesthetics, pixel art, and comic book illustration.</li>
                                        <li>[Arcade Legacy]: A nostalgic nod to the vibrant, high-contrast cabinet side-art and neon-drenched flyer designs that used to crowd the smoke-filled arcades of the 80s and 90s.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {screenshots.map((image, i) => (
                        <div key={i} className="screens-card">
                            <img src={image} alt="screen" />
                        </div>
                    ))}
                </div>
            </section>

            <div className="gamecube-posters">
				<div className="posters-title">
					<h3>GAMECUBE POSTERS</h3>
					<span>Most Iconic GameCube Posters</span>	
				</div>
                <PlatformCarousel posters={gamecubePosters} />
            </div>

			<hr></hr>

            <div className="xbox-posters">
				<div className="posters-title">
					<h3>XBOX POSTERS</h3>
					<span>Most Iconic XBox Posters</span>	
				</div>
                <PlatformCarousel posters={xboxPosters} />
            </div>

			<hr></hr>

            <div className="ps2-posters">
				<div className="posters-title">
					<h3>PS2 POSTERS</h3>
					<span>Most Iconic PS2 Posters</span>	
				</div>
                <PlatformCarousel posters={ps2Posters} />
            </div>
        </div>
    );
}