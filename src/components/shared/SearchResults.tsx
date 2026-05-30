export function SearchResults({results}) {
    return <>
    {results.map((v)=>{
        return <div>
            <img src={v.main_cover_url} width={100} height={100}/>
                <p>{v.title}</p>
            </div>
    })}
    </>
}