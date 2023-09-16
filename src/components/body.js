import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./sidebar";
import VideoContainer from "./videocontainer";

export default function Body(){
    return (
        <div className="flex">
            <SideBar/>
            <Outlet/>
            {/* <VideoContainer/> */}
        </div>
    )
}