import CrossGif from "../assets/logos/cross-logo.gif";
import { CrossPlaygroundUpload } from "../cross_playground/CrossPlaygroundUpload";
// import { CrossReferenceResultBox } from "../components/crossreference/CrossReferenceResultBox";
// import { CrossSearchScanning } from "../components/crossreference/CrossSearchScanning";
// import { useShowcaseStore } from "../store/useShowcaseStore";


export function Cross() {
    // const results = useShowcaseStore((s) => s.view.data.results ?? []);
    // const primaryMatch = results[0] ?? null;
    // const similarGames = results.slice(1);

    return (
        <div id="cross-playground">
            {/* LOGO & TAGLINE */}
            <div className="cross-top-content">
                <img src={CrossGif} alt="Main Logo" className="cross-logo" />
                <p className="cross-tagline">
                    The first search engine that cross-references art into a video game
                </p>
            </div>

            <div className="cross-playground-upload">
                <CrossPlaygroundUpload/>
            </div>
            {/* <div className="cross-playground-scanning">
                <CrossSearchScanning/>
            </div> */}
            {/* <div className="cross-playground-result">
                {primaryMatch && (
              <CrossReferenceResultBox
                game={primaryMatch}
                similarGames={similarGames}
              />
            )}
            </div> */}
        </div>
    );
}