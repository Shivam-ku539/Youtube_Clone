import { useDispatch, useSelector } from "react-redux"
import { toggleMenu, videoList } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Video_Search_API, YouTube_Search_API } from "../utils/constant";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { cacheResults } from "../utils/searchSlice";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { toggleMode } from "../utils/darkLightSlice";

const Head=()=>{

    const[searchQuery,setSearchquery]=useState("");
    const[suggestions,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    const dispatch=useDispatch();
    const getCache=useSelector((store)=>store.search)
    const mode=useSelector((store)=>store.mode.dark)
    const sideBar=useSelector(store=>store.app.isMenuOpen)
    
    useEffect(()=>{
    const timer=setTimeout(()=>
    {
        if(getCache[searchQuery]){
            setSuggestions(getCache[searchQuery])
        } else {
            getSuggestions()
        }
    }
    ,200)
    return ()=>{
        clearTimeout(timer);
    }
    },[searchQuery])


    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    const getSuggestions=async()=>{
       const data= await fetch(YouTube_Search_API+searchQuery);
       const json=await data.json()
       setSuggestions(json[1])
       dispatch(cacheResults({
        [searchQuery]:json[1]
       }))
       console.log("API call")
    }

    
    const getSearchedVideo=async()=>{
        const data= await fetch(Video_Search_API+`&q=`+searchQuery) 
        console.log(Video_Search_API+`&q=`+searchQuery)
        const json=await data.json()
        dispatch(videoList(json.items))
    }
    
    const searchClick=(e)=>{
        console.log("In search click",e.target.innerText)
        setSearchquery(e.target.innerText)
        getSearchedVideo()
    }
    const darkMode=()=>{
        console.log("dark called")
        dispatch(toggleMode(true))
    }
    const lightMode=()=>{
        dispatch(toggleMode(false))
    }

    return (
    <div className={`grid grid-flow-col p-2 py-4 shadow-lg ${mode ?'bg-gray-950':'bg-white'} fixed w-full`}>
    <div className="flex col-span-1 justify-evenly">
        {!sideBar ?
        <MenuRoundedIcon className={`h-10 w-8 mr-1 mt-2 ${mode ?'invert':'invert-0'}`} onClick={()=>toggleMenuHandler()}/>
         :<CloseOutlinedIcon onClick={()=>{toggleMenuHandler()}} className={`h-10 w-8 mr-1 mt-2 ${mode ?'invert':'invert-0'}`}/>
     }
        <img className={`h-6 mt-2 ${mode ?'invert':'invert-0'}`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"/>
    </div>
    <div className="col-span-10">
        <div className="flex justify-center">
        <input placeholder="Search" className={`w-1/2 border-gray-600 p-1 pl-4 rounded-l-full border ${mode? 'bg-gray-600':'bg-gray-300'} outline-none`} type="text" value={searchQuery} onChange={(e)=>{setSearchquery(e.target.value)}} onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}/>
        <button className={`border border-gray-700 p-2 rounded-r-full bg-gray-300 ${mode ? 'bg-gray-600':'bg-gray-300'}`}  onClick={()=>getSearchedVideo()} ><SearchSharpIcon/></button>
        
        {showSuggestions &&(
        <div className="fixed bg-white mt-11 px-5 w-[33rem] shadow-lg rounded-lg border-gray-200">
            <ul>
                {suggestions.map((x)=>
                <li onClick={()=>console.log("first")} key={x}  className="hover:bg-gray-200 px-2 cursor-pointer"><SearchSharpIcon/> {x}</li>)}
            </ul>
        </div>
        )}
        </div>
    </div>
    <div className="col-span-1 flex justify-center bg-red-30">
        <img className={`h-8 m-auto ${mode ?'invert':'invert-0'}`} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
        {! mode &&
        <DarkModeOutlinedIcon onClick={()=>{darkMode()}} className="m-auto"/>}
        {mode &&
        <LightModeOutlinedIcon onClick={()=>{lightMode()}} className="invert m-auto"/>}
    </div>
    </div>
    )
}
export default Head