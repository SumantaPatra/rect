export default function VideoCard({info}){
   return (
    <div className="p-2 m-2 w-80">
        <img src={info?.snippet?.thumbnails?.medium?.url} alt="videoImage"/>
        <h1 className="font-bold">{info?.snippet?.channelTitle}</h1>
        <div className="flex justify-between">
        <span className="font-semibold">{info?.statistics?.viewCount}</span>
        <span className="font-semibold">{info?.snippet?.publishedAt}</span>
        </div>
    </div>
   )
}