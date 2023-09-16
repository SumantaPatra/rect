import { YOUTUBE_API } from "../constants";
import { ButtonList } from "./buttonlist";
import {useState,useEffect} from 'react'
import VideoCard from "./videocard";
import { Link } from "react-router-dom";
export default function VideoContainer(){
 const [videoList,setVideoList] = useState([])

   const fetchData=async()=>{
      const data =  await fetch(YOUTUBE_API)
      const json = await data.json()
      setVideoList(json.items)
   }

   useEffect(()=>{
    fetchData();
   },[])

    return (
        <div>
            <ButtonList/>
                <div className="flex flex-wrap">
                    {
                         videoList?.map((video)=>{
                            return (
                                <Link key={video.id} to={"/watch?v="+video.id}>
                                 <VideoCard  info={video}/>
                                </Link>
                            )
                         })
                    }

                </div>
            
        </div>
    )
}