import { createSlice} from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        video:[],
        isMenuOpen:false,
        pageNumber:1,
        numberOfContentIn_a_page:10
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        videoList:(state,action)=>{
            state.video=action.payload
        },
        pageIndex:(state,action)=>{
            state.pageNumber=action.payload
        }
    },
});

export const{toggleMenu,closeMenu,videoList,pageIndex}=appSlice.actions
export default appSlice.reducer