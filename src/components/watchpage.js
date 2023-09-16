import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./commentlist";
import LiveComment from "./LiveComment";
const commentList = [
  {
    id: 1,
    text: "commentkkfskfksjkfjkssjn",
    replies: [{ id: 2, text: "replies1xnfdjkfdjkfkdf" }],
  },
  {
    id: 2,
    text: "commentkkfskfksjkfjkssjn",
    replies: [
      { id: 3, text: "replies1xnfdjkfdjkfkdf", replies: [] },
      {
        id: 4,
        text: "replies1xnfdjkfdjkfkdf",
        replies: [
          { id: 5, text: "replies1xnfdjkfdjkfkdf", replies: [] },
          { id: 6, text: "replies1xnfdjkfdjkfkdf", replies: [] },
          { id: 7, text: "replies1xnfdjkfdjkfkdf", replies: [] },
          { id: 8, text: "replies1xnfdjkfdjkfkdf", replies: [] },
          { id: 9, text: "replies1xnfdjkfdjkfkdf", replies: [] },
        ],
      },
    ],
  },
];
export default function WatchPage() {
  const [searchParam] = useSearchParams();

  const videoId = searchParam.get("v");

  const closeDispatch = useDispatch();
  useEffect(() => {
    closeDispatch(closeMenu());
  }, []);

  return (
    <div className="px-4 w-full">
      <div className="flex">
        <div>
        <iframe
        width="1000"
        height="600"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
        </div>
      <LiveComment/>
      </div>

      <CommentList commentList={commentList}/>
    </div>
  );
}
