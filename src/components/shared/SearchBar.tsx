type SearchBarProps = {
	borderStyle?: string
}

export function SearchBar({ borderStyle } : SearchBarProps) {
	return <input className = "searchbar" style =
	{
		{
			backgroundColor: '#ffffff',
			borderColor: borderStyle ?? '#000000', // solo di esempio come props
			// borderRadius
			color: '#242424'
		}
	} type="text" placeholder="Search" />
}