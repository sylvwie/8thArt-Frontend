import CrossGif from "../assets/logos/cross-logo.png";
import { CrossPlaygroundUpload } from "../crossplayground/CrossPlaygroundUpload";
import type { CrossReferenceProps } from "../components/props/CrossReferenceProps";
import { useCrossPlaygroundStore } from "../store/useCrossPlaygroundStore";
import { CrossPlaygroundScanning } from "../crossplayground/CrossPlaygroundScanning";
import { CrossPlaygroundResultBox } from "../crossplayground/CrossPlaygroundResult";

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