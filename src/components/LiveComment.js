import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiveComment } from "../utils/commentSlice";

export default function LiveComment() {
    const dispatch = useDispatch();
    const commentSelector = useSelector((store)=>store.liveComment.comments)
    const[liveComment,setLiveComment] = useState()

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    useEffect(()=>{
        const timerId = setInterval(()=>{ 
           dispatch(addLiveComment({
            text:makeid(20)
           }))

        },2000)
        return ()=> clearInterval(timerId)
    },[])
   function submitHandler(e){
    e.preventDefault()
    dispatch(addLiveComment({
        text:liveComment
    }))
    setLiveComment("")
   }

  return (
    <div className="h-[600px] overflow-y-scroll px-3 mx-2 w-full border flex flex-col-reverse bg-gray-200 border-gray-200">
        <form onSubmit={submitHandler}>
         <input value={liveComment} onChange={(e)=>{
           setLiveComment(e.target.value)
         }} type="text" className="outline-none border-b-2 border-b-gray-500 p-1 mb-3"/>
        </form>
        {
            commentSelector?.map((comment)=><Comment info={comment}/>)
        }
      {/* <Comment info={commentSelector}/> */}
    </div>
  );
}

function Comment({info}) {
  return (
    <div className="flex items-center border rounded-lg border-gray-400 p-2 m-2">
      <img
        className="h-8"
        alt="user-icon"
        src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
      />
      <span className="px-2">{info.text}</span>
    </div>
  );
}
