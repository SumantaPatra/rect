import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function SideBar(){
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return null;
    return (
        <div className="p-2 m-2 space-y-3 shadow-md w-48 min-h-screen">
            {/* <h1></h1> */}
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
        </div>
    )
}