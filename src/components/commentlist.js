

export default function CommentList({commentList}) {
  return <div>
    {
         commentList?.map((comment)=>{
            return (
                <div>
                    <Comment info={comment}/>
                    <div className="ml-5 border border-l-gray-300">
                    <CommentList commentList={comment.replies}/>
                    </div>
                </div>
            )
         })
    }
  </div>;
}

function Comment({info}) {
    const {text} = info
  return (
    <ul>
      <li className="p-2 bg-gray-200 w-96 m-2 rounded-lg">{text}</li>
    </ul>
  );
}
