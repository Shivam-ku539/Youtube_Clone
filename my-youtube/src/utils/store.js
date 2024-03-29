import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import darkLightSlice from './darkLightSlice';
const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        mode:darkLightSlice
    },
})
export default store;