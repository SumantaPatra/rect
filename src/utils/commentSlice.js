import { createSlice } from "@reduxjs/toolkit";

const liveCommentSlice = createSlice({
    name:"commentSlice",
    initialState:{
        comments:[]
    },
    reducers:{
      addLiveComment:(state,action)=>{
        state.comments.splice(10)
       state.comments.unshift(action.payload)
      }
    }

})

export default liveCommentSlice.reducer;
export const {addLiveComment} = liveCommentSlice.actions
