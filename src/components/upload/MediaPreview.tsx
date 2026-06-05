export function MediaPreview({ file }: { file: File }) {
	const previewUrl = URL.createObjectURL(file);

	if (file.type.startsWith("image/")) {
		return (
			<div className="media-preview">
				<img src={previewUrl} alt={file.name} />
			</div>
		);
	}

	if (file.type.startsWith("video/")) {
		return (
			<div className="media-preview">
				<video controls src={previewUrl} />
			</div>
		);
	}

	if (file.type.startsWith("audio/")) {
		return (
			<div className="media-preview">
				<audio controls src={previewUrl} />
			</div>
		);
	}

	return null;
}