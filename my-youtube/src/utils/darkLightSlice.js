import { createSlice } from "@reduxjs/toolkit";

const darkLight=createSlice({
    name:'mode',
    initialState:{
        dark:true
    },
    reducers:{
        toggleMode:(state,action)=>{
            state.dark=action.payload
        }
    },
})
export const{toggleMode}=darkLight.actions
export default darkLight.reducer