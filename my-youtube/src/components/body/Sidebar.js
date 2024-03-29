import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import TheatersIcon from '@mui/icons-material/Theaters';

const Sidebar=()=>{

    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    const mode=useSelector(store=>store.mode.dark)
    
    //Early return style
    if(!isMenuOpen) return null;

    return (
        <div className={`p-5 shadow-lg w-48 ${mode ?'bg-gray-950 text-gray-300':'bg-white'} `}>

<ul>
                <li><Link to="/"><HomeOutlinedIcon/> Home</Link></li>
                <li><VideoLibraryOutlinedIcon/> Shorts</li>
                <li><OndemandVideoOutlinedIcon/> Videos</li>
                <li><LiveTvOutlinedIcon/> Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li><LibraryMusicOutlinedIcon/> Music</li>
                <li><SportsBasketballOutlinedIcon/> Sports</li>
                <li><SportsEsportsOutlinedIcon/> Gaming</li>
                <li><TheatersIcon/> Movies</li>
            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li><LibraryMusicOutlinedIcon/> Music</li>
                <li><SportsBasketballOutlinedIcon/> Sports</li>
                <li><SportsEsportsOutlinedIcon/> Gaming</li>
                <li><TheatersIcon/> Movies</li>
            </ul>
        </div>
    )
}
export default Sidebar