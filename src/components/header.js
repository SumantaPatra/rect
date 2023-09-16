import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import SearchResult from "./searchresult";
import { API_KEY, YOUTUBE_SEARCH_API } from "../constants";
import { cacheResult } from "../utils/searchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestResult,setSuggestResult] = useState([])
  const cache = useSelector((store)=>store.search)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(()=>{
    // console.log(selector)
    const timer = setTimeout(()=>{
        searchQueryResult()  
    },2000)

    return ()=> clearTimeout(timer)
  },[query])

 async function searchQueryResult(){

      if(cache[query]) {
        setSuggestResult(cache[query])
      }
      else{
        const data = await fetch(YOUTUBE_SEARCH_API+query)
        const json = await data.json()
        setSuggestResult(json[1])
        dispatch(cacheResult({
            [query]:json[1]
        }))
      }
  }



  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex ml-2 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          alt="hambruger-icon"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          className="h-8"
          alt="yt-icon"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-9">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          value={query}
          onChange={searchHandler}
        />
        <button className="p-2 border border-gray-400">Search</button>
        <div className="absolute">
          <SearchResult result={suggestResult} />
        </div>
      </div>
      <div>
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
        />
      </div>
    </div>
  );
}
