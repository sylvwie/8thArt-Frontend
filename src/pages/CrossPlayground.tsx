import CrossGif from "../assets/logos/cross-logo.png";
import { useCrossPlaygroundStore } from "../store/useCrossPlaygroundstore.tsx";
import { CrossPlaygroundUpload } from "../cross_playground/CrossPlaygroundUpload";
import { CrossPlaygroundScanning } from "../cross_playground/crossPlaygroundScanning";
import { CrossPlaygroundResultBox } from "../cross_playground/crossPlaygroundResult";
import type { CrossReferenceProps } from "../components/props/CrossReferenceProps.tsx";

const EMPTY_RESULTS: CrossReferenceProps[] = [];

export function Cross() {
  const step = useCrossPlaygroundStore((s) => s.view.step);
  const results = useCrossPlaygroundStore((s) => s.view.data.results ?? EMPTY_RESULTS);

  const primaryMatch = results[0] ?? null;
  const similarGames = results.slice(1);

  return (
    <div id="cross-playground">
      {/* LOGO & TAGLINE */}
      <div className="cross-top-content">
        <img src={CrossGif} alt="Main Logo" className="cross-logo" />
        <p className="cross-tagline">
          The first search engine that cross-references art into a video game
        </p>
      </div>

      {/* STEP: UPLOAD */}
      {step === "uploading" && <CrossPlaygroundUpload />}

      {/* STEP: SCANNING */}
      {step === "scanning" && <CrossPlaygroundScanning />}

      {/* STEP: RESULT */}
      {step === "result" && primaryMatch && (
        <CrossPlaygroundResultBox
          game={primaryMatch}
          similarGames={similarGames}
        />
      )}
    </div>
  );
}