import { useNavigate } from "react-router-dom";
import heroImage from "/src/assets/stories/story1/story1-banner.png";
import icon from "/src/assets/stories/story1/story1-icon.webp";
import trackIcon from "/src/assets/icons/track-icon.png";
import backArrow from "/src/assets/icons/arrow-left.png";

// palette
import color1 from "/src/assets/stories/story1/palette/story1-palette1.png";
import color2 from "/src/assets/stories/story1/palette/story1-palette2.png";
import color3 from "/src/assets/stories/story1/palette/story1-palette3.png";
import color4 from "/src/assets/stories/story1/palette/story1-palette4.png";

// screens
import screen1 from "/src/assets/stories/story1/screens/story1-img1.png";
import screen2 from "/src/assets/stories/story1/screens/story1-img2.png";
import screen3 from "/src/assets/stories/story1/screens/story1-img3.png";
import screen4 from "/src/assets/stories/story1/screens/story1-img4.png";
import screen5 from "/src/assets/stories/story1/screens/story1-img5.png";
import screen6 from "/src/assets/stories/story1/screens/story1-img6.png";
import screen7 from "/src/assets/stories/story1/screens/story1-img7.png";
import screen8 from "/src/assets/stories/story1/screens/story1-img8.png";
import screen9 from "/src/assets/stories/story1/screens/story1-img9.png";
import screen10 from "/src/assets/stories/story1/screens/story1-img10.png";
import screen11 from "/src/assets/stories/story1/screens/story1-img11.png";
import screen12 from "/src/assets/stories/story1/screens/story1-img12.png";
import screen13 from "/src/assets/stories/story1/screens/story1-img13.png";
import screen14 from "/src/assets/stories/story1/screens/story1-img14.png";

// soundtracks
import track1 from "/src/assets/stories/story1/tracks/story1-track1.png";
import track2 from "/src/assets/stories/story1/tracks/story1-track2.png";
import track3 from "/src/assets/stories/story1/tracks/story1-track3.jpg";
import track4 from "/src/assets/stories/story1/tracks/story1-track4.jpg";
import track5 from "/src/assets/stories/story1/tracks/story1-track5.jpg";
import track6 from "/src/assets/stories/story1/tracks/story1-track6.jpg";

// characters
import character1 from "/src/assets/stories/story1/pg/story1-pg1.jpg";
import character2 from "/src/assets/stories/story1/pg/story1-pg2.jpg";
import character3 from "/src/assets/stories/story1/pg/story1-pg3.jpg";
import character4 from "/src/assets/stories/story1/pg/story1-pg4.png";	
import character5 from "/src/assets/stories/story1/pg/story1-pg5.jpg";	
import character6 from "/src/assets/stories/story1/pg/story1-pg6.png";	
import character7 from "/src/assets/stories/story1/pg/story1-pg7.jpg";	
import character8 from "/src/assets/stories/story1/pg/story1-pg8.jpg";	

export default function FeaturedStory1() {
	const navigate = useNavigate();

	const storyGameScreens = [
		screen1,
		screen2,
		screen3,
		screen4,
		screen5,
		screen6,
		screen7,
		screen8,
		screen9,
		screen10,
		screen11,
		screen12,
		screen13,
		screen14,
	];

	const trackTitles = [
		"Wip3 out",
		"Tony Hawk’s Pro Skater",
		"Jet Set Radio",
		"Need for Speed",
		"Gran Turismo",
		"Syphon Filter",
	];

	const charactersNames = [
		"Ulala - Space Channel 5 (1999)",
		"Rikku - Final Fantasy X (2001)",
		"Dante - DMC (2001)",
		"Solid Snake - MGS2 (2001)",
		"Sora - Kingdom Hearts (2002)",
		"Max Payne - Max Payne (2001)",
		"Sonic - Sonic Adventure 2 (2001)",
		"Beat - Jet Set Radio (2000)",
	];

	return (
		<div className="featured-story-page-1">
			
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
					<span className="featured-story-card-title">
						Y2K Aesthetic
					</span>

					<span className="featured-story-card-subtitle">
						Early 2000s games
					</span>
				</div>

			</section>

			</div>

			<section className="featured-story-content">

				<div className="featured-story-section-header">
					<h2> Y2K Aesthetic: The Retro-Future of Gaming</h2>
					<p>
						Curated narratives exploring gaming's most compelling worlds
					</p>
				</div>

				<div className="featured-story-overview">

					<div className="overview-card overview-card--overview-container">

						<div className="overview-card overview-card--palette">
							<button className="overview-card overview-card--palette-box"> <img src={color1} alt="" /> #00FF66 </button>
							<button className="overview-card overview-card--palette-box"> <img src={color2} alt="" /> #0077FF </button>
							<button className="overview-card overview-card--palette-box"> <img src={color3} alt="" /> #CCCCCC </button>
							<button className="overview-card overview-card--palette-box"> <img src={color4} alt="" /> #0A0D1A </button>
						</div>

						<div className="overview-card overview-card--synopsis">
							<h3>[ SYNOPSIS ]</h3>
							<p>
								At the turn of the millennium, gaming was obsessed with a specific vision of the future: one filled with optimism, tech-utopianism, and high-energy street culture. The Y2K aesthetic is a frantic mix of rave culture, cyber-punk lite, and "blobject" industrial design. It’s the era of translucent plastics, baggy cargo pants, and breakbeat soundtracks. These games didn’t just want to be played; they wanted to transport you into a hyper-saturated, digitized music video.
							</p>
						</div>

						<div className="overview-card overview-card--style-columns">
							<div className="overview-card overview-card--style-column">
								<span>[ The Glitch & Grid ]</span>
								<div className="overview-card overview-card--style-column-list">
									<ul>
										<li>[Mood]: Feeling like you're inside a computer or a hacker's code.</li>
										<li>[Visuals]: Tutorials set in the void, neon green or blue 3D grids, infinite black skies, and digital distortion/glitch effects.</li>
										<li>[Key Games]: Metal Gear Solid (VR Missions), Spider-Man (2000).</li>
									</ul>
								</div>
							</div>

							<div className="overview-card overview-card--style-column">
								<span>[ Low-Poly Chic ]</span>
								<div className="overview-card overview-card--style-column-list">
									<ul>
										<li>[Mood]: Clean polygonal models masked by a tremendously cool attitude.</li>
										<li>[Visuals]: Faces with flat photographic textures, fingers pressed together like a paddle, mirrored sunglasses, and shiny black leather jackets.</li>
										<li>[Key Games]: Syphon Filter, Deus Ex, Tomb Raider: Chronicles.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{storyGameScreens.map((image, i) => (
						<div key={i} className="screens-card">
							<img src={image} alt="screen" />
						</div>
					))}

				</div>
			</section>

			<section className="featured-story-soundtrack">

				<div className="featured-story-section-header">
					<h2>Soundtrack of an Era</h2>
					<p>
						Y2K Soundtracks featuring the most iconic tracks from early 2000s games
					</p>
				</div>

				<div className="soundtrack-row">

						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[0]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track1} alt="" />
							</div>
						</div>

						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[1]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track2} alt="" />
							</div>
						</div>
						
						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[2]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track3} alt="" />
							</div>
						</div>

						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[3]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track4} alt="" />
							</div>
						</div>

						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[4]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track5} alt="" />
							</div>
						</div>

						<div className="soundtrack-card">
							<div className="soundtrack-title-container">
								<span> {trackTitles[5]} </span>
								<img src={trackIcon} alt="track-icon" />
							</div>

							<div className="soundtrack-image-container">	
								<img className="soundtrack-image" src={track6} alt="" />
							</div>
						</div>

				</div>

			</section>

			<section className="featured-story-characters">

				<div className="featured-story-section-header">
					<h2>Characters</h2>
					<p>
						Most iconic y2k characters from early 2000s games
					</p>
				</div>

				<div className="characters-row">
						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[0]} </span>
							</div>
							
							<div className="character-image-container">	
								<img className="character-image" src={character1} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[1]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character2} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[2]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character3} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[3]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character4} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[4]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character5} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[5]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character6} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[6]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character7} alt="" />
							</div>
						</div>

						<div className="character-card" >
							<div className="story-category-box-title-container">
								<span> {charactersNames[7]} </span>
							</div>
							<div className="character-image-container">	
								<img className="character-image" src={character8} alt="" />
							</div>
						</div>

				</div>

			</section>

		</div>
	);
}