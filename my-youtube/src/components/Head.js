import { useDispatch, useSelector } from "react-redux"
import { toggleMenu, videoList } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Video_Search_API, YouTube_Search_API } from "../utils/constant";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { cacheResults } from "../utils/searchSlice";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Head=()=>{

    const[searchQuery,setSearchquery]=useState("");
    const[suggestions,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    const dispatch=useDispatch();
    const getCache=useSelector((store)=>store.search)

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

    return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
    <div className="flex col-span-1 justify-evenly">
        <MenuRoundedIcon className="h-10 w-8 mr-1 mt-2" onClick={()=>toggleMenuHandler()}/>
        <img className="h-6 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"/>
    </div>
    <div className="col-span-10">
        <div className="flex justify-center">
        <input placeholder="Search" className="w-1/2 border-gray-400 p-1 pl-4 rounded-l-full border" type="text" value={searchQuery} onChange={(e)=>{setSearchquery(e.target.value)}} onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}/>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-300 " onClick={()=>getSearchedVideo()} ><SearchSharpIcon/></button>
        
        {showSuggestions &&(
        <div className="fixed bg-white mt-11 px-5 w-[33rem] shadow-lg rounded-lg border-gray-200">
            <ul>
                {suggestions.map((x)=>
                <li onClick={(e)=>{searchClick(e)}} key={x}  className="hover:bg-gray-200 px-2 cursor-pointer"><SearchSharpIcon/> {x}</li>)}
            </ul>
        </div>
        )}
        </div>
    </div>
    <div className="col-span-1 flex justify-center">
        <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
    </div>
    </div>
    )
}
export default Head