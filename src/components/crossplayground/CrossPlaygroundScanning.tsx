import { useCrossPlaygroundStore } from "../../store/useCrossPlaygroundStore";
import { useEffect, useRef } from "react";
import { useCrossReferenceSearch } from "../../hooks/useCrossReferenceSearch.tsx";

import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
// import crossRefFull from "/src/assets/icons/cross-reference-full.png";
import crossRefFull from "/src/assets/icons/cross-icon.gif";

export function CrossPlaygroundScanning() {

	const setStep = useCrossPlaygroundStore((s) => s.setStep);
	const setData = useCrossPlaygroundStore((s) => s.setData);
	const resetUpload = useCrossPlaygroundStore((s) => s.resetUpload);
	const setUploadProgress = useCrossPlaygroundStore((s) => s.setUploadProgress);
	const uploadProgress = useCrossPlaygroundStore((s) => s.uploadProgress);
	const file = useCrossPlaygroundStore((s) => s.view.data.file);

	const { search, results, loading } = useCrossReferenceSearch();
	const searchStarted = useRef(false);
	
	// MEDIA PREVIEW
	const previewUrl = useCrossPlaygroundStore(
  		(s) => s.view.data.previewUrl
	);

	// LAUNCH SEARCH ON TIME
	useEffect(() => {
		if (!file || searchStarted.current) return;
		searchStarted.current = true;
		setUploadProgress(0);
		search({ image: file, count: 5 });
	}, [file, search, setUploadProgress]);

	// PROGRESS BAR SIMULATION
	useEffect(() => {
	if (!loading && results.length === 0) return;

	let mounted = true;

	const duration = 8000; // 8 seconds
	const maxWhileLoading = 90;

	const startTime = Date.now();

	const animate = () => {
		if (!mounted) return;

		const elapsed = Date.now() - startTime;

		const t = Math.min(elapsed / duration, 1);

		// curva morbida e costante
		const eased = 1 - Math.pow(1 - t, 2);

		const progress = eased * maxWhileLoading;

		setUploadProgress(progress);

		if (loading && t < 1) {
		requestAnimationFrame(animate);
		}
	};

	animate();

	return () => {
		mounted = false;
	};
	}, [loading, results.length, setUploadProgress]);

	// PROGRESS BAR EFFECT
	useEffect(() => {
		if (loading || results.length === 0) return;

		setUploadProgress(100);
		setData({ results });

		setTimeout(() => setStep("result"), 400);
	}, [loading, results, setData, setStep, setUploadProgress]);

	return (
		<div className="cross-search-section">

			<div className="cross-search-box-wrapper">
				<div className="cross-search-box">

					<div className="cross-search-container">
						<img id="special-background" src={specialBgAscii} alt="Special Background" />

						<div className="cross-search-header">
							<span id="cross-search-header-text"> [ ANALYSIS HUB ]</span>

							<div id="cross-search-header-buttons">
								{/* RESET BTN */}
								<button id="cross-search-reset-button" onClick={resetUpload}>
									RESET
								</button>
							</div>
						</div>

						{/* Uploaded Media Preview during Scanning*/}
						<div className="cross-search-scanning-body"
							style={
								previewUrl
									? {
										backgroundImage: `url(${previewUrl})`,
									}
									: undefined
							}
						>

							<img src={crossRefFull} alt="Cross Reference Full" />

							<div id="cross-search-body-text-container">
								<span id="cross-search-scanning-body-text"> [ ANALYZING PATTERN DATA ]</span>

								{/* PROGRESS BAR */}
								<div className="progress-bar">
									<div
										className="progress-bar-fill"
										style={{
											width: `${uploadProgress}%`,
										}}
									/>

									<span>{Math.round(uploadProgress)}%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
