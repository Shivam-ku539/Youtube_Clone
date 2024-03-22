import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";

const Head=()=>{

    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
    <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()} className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/207px-Hamburger_icon.svg.png"/>
        <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"/>
    </div>
    <div className="col-span-10 px-10">
        <input className="w-1/2 border-gray-400 p-2 rounded-l-full border" type="text"/>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-500 ">Search</button>
    </div>
    <div className="col-span-1">
        <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
    </div>
    </div>
    )
}
export default Head