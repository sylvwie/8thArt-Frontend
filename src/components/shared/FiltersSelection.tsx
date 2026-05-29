export function FiltersSelection({
	showByGenres = true,
	showByArtStyles = true,
	showByPlatforms = true,
	}) {
	return <>
			{showByGenres && (
			<div className="filters-by-genre-types">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="Action">Action</option>
					<option className="single-filter" value="Arcade">Arcade</option>
					<option className="single-filter" value="Platform">Platform</option>
					<option className="single-filter" value="Arcade">Arcade</option>
					<option className="single-filter" value="Shooter">Shooter</option>
					<option className="single-filter" value="Fighting">Fighting</option>
					<option className="single-filter" value="Beat em up">Beat em up</option>
					<option className="single-filter" value="Adventure">Adventure</option>
					<option className="single-filter" value="Roleplaying RPG">Roleplaying RPG</option>
					<option className="single-filter" value="Visual Novel">Visual Novel</option>
					<option className="single-filter" value="Graphic Adventure">Graphic Adventure</option>
					<option className="single-filter" value="Strategy/Tactics">Strategy/Tactics</option>
					<option className="single-filter" value="Puzzle">Puzzle</option>
					<option className="single-filter" value="Puzzle Elements">Puzzle Elements</option>
					<option className="single-filter" value="Managerial/Business ">Managerial/Business </option>
					<option className="single-filter" value="Simulation">Simulation</option>
					<option className="single-filter" value="Puzzle Elements">Puzzle Elements</option>
					<option className="single-filter" value="Sports ">Sports </option>
					<option className="single-filter" value="Racing/Driving">Racing/Driving</option>
					<option className="single-filter" value="Vehicle Simulator">Vehicle Simulator</option>
				</select>
			</div>
			)}

			{showByArtStyles && (
			<div className="filters-by-art-styles">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="Anime/Manga">Anime/Manga</option>
					<option className="single-filter" value="Augmented Reality">Augmented Reality</option>
					<option className="single-filter" value="Full Motion Video">Full Motion Video</option>
					<option className="single-filter" value="Augmented Reality">Augmented Reality</option>
					<option className="single-filter" value="FMV">FMV</option>
					<option className="single-filter" value="Live Action">Live Action</option>
					<option className="single-filter" value="Video Backdrop">Video Backdrop</option>
				</select>
			</div>
			)}
			
			{showByPlatforms && (
			<div className="filters-by-platform-targets">
				<select className="filter-params-input">
					<option className="single-filter" value="">-</option>
					<option className="single-filter" value="Windows">Windows</option>
					<option className="single-filter" value="DOS">DOS</option>
					<option className="single-filter" value="MacOs">MacOs</option>
					<option className="single-filter" value="Linux">Linux</option>
					<option className="single-filter" value="Playstation 4">Playstation 4</option>
					<option className="single-filter" value="Playstation 3">Playstation 3</option>
					<option className="single-filter" value="Playstation 2">Playstation 2</option>
					<option className="single-filter" value="Playstation 1">Playstation 1</option>
					<option className="single-filter" value="Playstation">Playstation</option>
					<option className="single-filter" value="PSP">PSP</option>
					<option className="single-filter" value="Xbox One">Xbox One</option>
					<option className="single-filter" value="Xbox 360">Xbox 360</option>
					<option className="single-filter" value="Xbox Series">Xbox Series</option>
					<option className="single-filter" value="Nintendo Switch">Nintendo Switch</option>
					<option className="single-filter" value="Wii">Wii</option>
					<option className="single-filter" value="NES">NES</option>
					<option className="single-filter" value="SNES">SNES</option>
					<option className="single-filter" value="Android">Android</option>
					<option className="single-filter" value="Iphone">Iphone</option>
					<option className="single-filter" value="Ipad">Ipad</option>
					<option className="single-filter" value="Browser">Browser</option>
					<option className="single-filter" value="Nintendo DS">Nintendo DS</option>
					<option className="single-filter" value="Nintendo 3DS">Nintendo 3DS</option>
					<option className="single-filter" value="GameBoy Advance">GameBoy Advance</option>
					<option className="single-filter" value="Commodore 64">Commodore 64</option>
					<option className="single-filter" value="Amiga">Amiga</option>
					<option className="single-filter" value="ZX Spectrum">ZX Spectrum</option>
					<option className="single-filter" value="Amstrad CPC">Amstrad CPC</option>
				</select>
			</div>
			)}
	</>
}