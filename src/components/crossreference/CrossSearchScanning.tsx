import { useShowcaseStore } from "../../store/useShowcaseStore";
import { useEffect } from "react";
import { useMemo } from "react";

import closeIcon from "/src/assets/icons/close-icon.svg";
import specialBgAscii from "/src/assets/template/special-background-ascii.gif";
import crossRefFull from "/src/assets/icons/cross-reference-full.png";

import DecryptedText from "../motion/DecryptedText";
import { Logo } from "../shared/Logo";
import { StatusLog } from "../shared/StatusLog";

export function CrossSearchScanning() {

	const setStep = useShowcaseStore((s) => s.setStep);
	const resetUpload = useShowcaseStore((s) => s.resetUpload);
	const goToArchive = useShowcaseStore((s) => s.goToArchive);

	const uploadProgress = useShowcaseStore((s) => s.uploadProgress);
	const setUploadProgress = useShowcaseStore((s) => s.setUploadProgress);

	// MEDIA PREVIEW
	const file = useShowcaseStore(
		(s) => s.view.data.file
	);

	const previewUrl = useMemo(() => {
		if (!file || !file.type.startsWith("image/")) return null;
		return URL.createObjectURL(file);
	}, [file]);

	// PROGRESS BAR EFFECT
	useEffect(() => {
		setUploadProgress(0);

		let progress = 0;
		let mounted = true;

		const interval = setInterval(() => {
			if (!mounted) return;

			progress += Math.random() * 12;

			const clamped = Math.min(progress, 100);

			setUploadProgress(clamped);

			if (clamped >= 100) {
			clearInterval(interval);

			setTimeout(() => {
				if (mounted) setStep("result");
			}, 400);
			}
		}, 120);

		return () => {
			mounted = false;
			clearInterval(interval);
		};
		}, [setStep, setUploadProgress]);

	return (
		<div className="cross-search-section">
			<div className="cross-search-container">
				<Logo />
				<div className="cross-search-logs">
					<span className="log-line">

						<span className="ok-text">
							<DecryptedText
								text="[ UPLOAD ] "
								sequential
								useOriginalCharsOnly={false}
							></DecryptedText>
						</span>

						<span id="img-received-text">
							<DecryptedText
								text="Image received..."
								sequential
								delay={100}
								useOriginalCharsOnly={false}
							></DecryptedText>
						</span>
					</span>

					<span className="log-line"><span className="ok-text">
						<DecryptedText
							text="[ SCAN ] "
							delay={400}
							sequential
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>
						<DecryptedText
							text=" Preparing core..."
							sequential
							delay={500}
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>

					<span className="log-line"><span className="ok-text">
						<DecryptedText
							text="[ SCAN ] "
							delay={200}
							sequential
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>
						<DecryptedText
							text="Analyze similarity..."
							sequential
							delay={300}
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>

					<span className="log-line"><span className="ok-text">
						<DecryptedText
							text="[ 0K ] "
							sequential
							delay={600}
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>
						<DecryptedText
							text="Core extraction completed."
							sequential
							delay={700}
							useOriginalCharsOnly={false}
						></DecryptedText>
					</span>

				</div>
			</div>

			<div className="cross-search-box-wrapper">
				<div className="cross-search-box">

					<span id="cross-search-main-text">CROSS-REFERENCE ENGINE v1.0.0</span>

					<div className="cross-search-container">
						<img id="special-background" src={specialBgAscii} alt="Special Background" />

						<div className="cross-search-header">
							<span id="cross-search-header-text"> [ ANALYSIS HUB ]</span>

							<div id="cross-search-header-buttons">
								{/* RESET BTN */}
								<button id="cross-search-reset-button" onClick={resetUpload}>
									RESET
								</button>
								{/* CLOSE BTN */}
								<button id="cross-search-close-button" onClick={goToArchive}>
									<img src={closeIcon} alt="Close" />
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
								<span id="cross-search-scanning-body-text"> [ ANALYZING PATTERN DATA  ]</span>

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
				<StatusLog />
			</div>

		</div>
	)
}
