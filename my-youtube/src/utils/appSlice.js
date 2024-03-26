import { createSlice, current } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        video:[],
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        videoList:(state,action)=>{
            console.log((action.payload))
            state.video=action.payload
        }
    },
});

export const{toggleMenu,closeMenu,videoList}=appSlice.actions
export default appSlice.reducer