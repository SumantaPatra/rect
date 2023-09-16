import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveCommentSlice from './commentSlice'

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        liveComment:liveCommentSlice,
    }

})

export default store