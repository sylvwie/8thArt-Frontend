export default function FeaturedStory2() {
	return (
		<div className="featured-story-page">
			<span>Storia 2</span>
		</div>
	)
}


// import { useState } from "react";
// import arrowLeft from "../../assets/icons/arrow-left.png";
// import arrowRight from "../../assets/icons/arrow-right.png";
// import saveIcon from "/src/assets/icons/save-icon.png";

// // screens
// import screen1 from "/src/assets/stories/story2/screens/story2-img1.png";
// import screen2 from "/src/assets/stories/story2/screens/story2-img2.png";
// import screen3 from "/src/assets/stories/story2/screens/story2-img3.png";
// import screen4 from "/src/assets/stories/story2/screens/story2-img4.png";
// import screen5 from "/src/assets/stories/story2/screens/story2-img5.png";
// import screen6 from "/src/assets/stories/story2/screens/story2-img6.png";
// import screen7 from "/src/assets/stories/story2/screens/story2-img7.png";
// import screen8 from "/src/assets/stories/story2/screens/story2-img8.png";
// import screen9 from "/src/assets/stories/story2/screens/story2-img9.png";
// import screen10 from "/src/assets/stories/story2/screens/story2-img10.png";
// import screen11 from "/src/assets/stories/story2/screens/story2-img11.png";
// import screen12 from "/src/assets/stories/story2/screens/story2-img12.png";
// import screen13 from "/src/assets/stories/story2/screens/story2-img13.png";

// export default function FeaturedStory2() {

// 		// Screenshots
// 		const [screenshotIndex, setScreenshotIndex] = useState(0);

// 		const screenshots = [
// 		screen1,
// 		screen2,
// 		screen3,
// 		screen4,
// 		screen5,
// 		screen6,
// 		screen7,
// 		screen8,
// 		screen9,
// 		screen10,
// 		screen11,
// 		screen12,
// 		screen13,
// 	];
	
// 		const hasScreens = screenshots.length > 0;
	
// 		const currentScreenshot = hasScreens
// 			? screenshots[screenshotIndex]
// 			: null;
	
// 		const prevScreenshot = () => {
// 			if (!hasScreens) return;
// 			setScreenshotIndex((i) =>
// 				i > 0 ? i - 1 : screenshots.length - 1
// 			);
// 		};
	
// 		const nextScreenshot = () => {
// 			if (!hasScreens) return;
// 			setScreenshotIndex((i) =>
// 				i < screenshots.length - 1 ? i + 1 : 0
// 			);
// 		};
	
// 		// Thumbnails
// 		const thumbnailIndices = hasScreens
// 			? [0, 1, 2, 3].map(
// 				(offset) =>
// 					(screenshotIndex + offset) % screenshots.length
// 			)
// 			: [];
	

// 	return (
// 		<div className="featured-story-page">
// 			<span>Featured Story 2</span>

// 		{/* SCREENSHOTS */}
// 			{screenshots.length > 0 && (
// 				<section className="game-overview__section">
// 					<h3 className="game-overview__section-title">SCREENSHOTS</h3>
// 					<div className="game-overview__screenshots">

// 						<img
// 							className="game-overview__arrow game-overview__arrow--left"
// 							src={arrowLeft}
// 							alt="previous"
// 							onClick={prevScreenshot}
// 							style={{ cursor: "pointer" }}
// 						/>

// 						<div className="game-overview__screenshots-content">
// 							<div className="game-overview__screenshot-large-box">
// 								{currentScreenshot && (
// 									<img
// 										className="game-overview__screenshot-large"
// 										src={screen1}
// 										alt=""
// 									/>
// 								)}

// 								{/* save icon */}
// 								<button className="game-overview__save-button">
// 									<img
// 										src={saveIcon}
// 										alt="save"
// 									/>
// 								</button>

// 								{/* add variant click and hover */}
// 								{/* <button className="game-overview__save-button-hover">
// 									<img
// 										src={saveIconVariant}
// 										alt="save"
// 									/>
// 								</button> */}
// 							</div>

// 							<div className="game-overview__thumbnails">
// 								{thumbnailIndices.map((idx) => {
// 									const s = screenshots[idx];
// 									return s ? (
// 										<img
// 											className="game-overview__thumbnail"
// 											src={screen2}
// 											alt=""
// 											onClick={() => setScreenshotIndex(idx)}
// 											style={{ cursor: "pointer" }}
// 										/>
// 									) : null;
// 								})}
// 							</div>

// 							{/* screen number n/TOTAL */}
// 							<div id="screenshoots-number">
// 								{screenshotIndex + 1} / {screenshots.length}
// 							</div>
							
// 						</div>

// 						<img
// 							className="game-overview__arrow game-overview__arrow--right"
// 							src={arrowRight}
// 							alt="next"
// 							onClick={nextScreenshot}
// 							style={{ cursor: "pointer" }}
// 						/>
// 					</div>

// 				</section>
// 			)}
// 		</div>
// 	);
// }