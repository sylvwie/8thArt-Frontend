// da modificare in base al percorso di destinazione del contenuto mostrato

export function DirectoryBar() {
	return (
		<div id="directory-bar-container">
			<span>~</span>
			<span>/</span>
			<span>pag1</span>
			<span>/</span>
			<span>pag2</span>
			<span>/</span>
			<span className="directoryLink">pag3</span>
		</div>	
	)
}

// rendere dinamico in base al percorso della pagina in cui porta