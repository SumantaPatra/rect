export default function SearchResult({result}){
     if(result.length === 0) return null
    return <div className="shadow-md relative bg-gray-100 w-[34rem] p-2 m-2">
        <ul>
            {
                result?.map((result,index)=><li key={index} className="hover:bg-gray-300 rounded-lg px-3">{result}</li>)
            }
        </ul>
    </div>
}