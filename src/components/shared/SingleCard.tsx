type SingleCardProps = {
	text: string;
	description: string
}

export function SingleCard({ text, description } : SingleCardProps) {
	return <div className="single-card">
		<h3>{text}</h3>
		<p>{description}</p>
	</div>
	
}