import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useSelector } from "react-redux"

const Body=()=>{

    const mode=useSelector(store=>store.mode.dark)

    return (
        <div className={`flex ${mode ?'bg-gray-950 text-gray-300':'bg-white'} w-scree`}>
        <Sidebar/>
        <Outlet/>
        {/* <MainContainer/> */}
        </div>
    )
}
export default Body