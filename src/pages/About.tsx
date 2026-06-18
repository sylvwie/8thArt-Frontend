// ABOUT PAGE (added in App tsx)

import { useState } from "react";

export function About() {
	const [secretImageOpen, setSecretImageOpen] = useState(false);

	return <>
		<div id="about-wrapper">
			<div className="about-container-left">
				<span className="about-title">ABOUT US</span>
				<div id="about">
					<span className="about-subtitle"> Welcome to 8th Art </span>
					<p>
						The digital sanctuary dedicated to the visual soul of video games.
						For decades, society has recognized seven traditional forms of art: Architecture, Sculpture, Painting, Music, Poetry, Dance, and Cinema. We believe it’s time to stop treating video games as "just hobbies" and start recognizing them for what they truly are—the Eighth Art.
					</p>

					<span className="about-subtitle"> Our Mission </span>
					<p>
						We aren't just a gallery; we are digital archeologists. 8th Art exists to archive, preserve, and celebrate the staggering amount of creative labor that goes into building virtual worlds. From the first pixelated sprites of the 70s to the breathtaking ray-traced vistas of today, we believe every frame is a testament to human imagination.
					</p>
				</div>
			</div>

			<div className="about-container-right">
				<span className="about-title">CONTACTS</span>
				<div id="contacts">
					<p>
						We're three italian IED Milan students from Visual Arts, Mathieu, Silvia and Martina, who share a passion for video games and their artistic value. We are committed to creating a platform that not only showcases the visual artistry of games but also educates the public about their cultural significance.
						For inquiries, collaborations, or just to say hello, please reach out to us at our email address.
					</p>
					<br></br>
					<div id="emails">
						<span> <strong>Contact us:</strong> </span>
						<h4> Mathieu: <a href="mailto:m.trevisan@ied.edu">m.trevisan@ied.edu</a> </h4>
						<h4> Silvia: <a href="mailto:s.penati@ied.edu">s.penati@ied.edu</a> </h4>
						<h4> Martina: <a href="mailto:m.marzullo@ied.edu">m.marzullo@ied.edu</a> </h4>
					</div>
				</div>
			</div>
		</div>

		<div id="team-8th-art">   
			{!secretImageOpen && (
				<button onClick={() => setSecretImageOpen(true)}>
					CLICK TO SEE US, TOTALLY NOT A VIRUS, TRUST ME!
				</button>
			)}
			
			{secretImageOpen && (
				<div id="secret-image" onClick={() => setSecretImageOpen(false)}>
					<img src="/src/assets/template/frens.jpg" alt="us"/>
					<span className="close-hint">click to hide</span>
				</div>
			)}
		</div>
	</>
}