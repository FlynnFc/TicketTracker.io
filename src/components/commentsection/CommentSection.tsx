import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import Commentinput from "../commentinput/Commentinput";

type commentProps = {
  map(arg0: (el: commentProps) => JSX.Element): React.ReactNode;
  avatar: string;
  date: string;
  id: any;
  message: string;
  name: string;
  ticketId: string;
};

const CommentSection = (props: { id: any }) => {
  const [comments, setComments] = useState<commentProps>();

  useEffect(() => {
    const commentHandler = async () => {
      const res = await fetch("https://www.tickettracker.io/api/comments", {
        method: "GET",
        headers: { ticketId: props.id },
      });
      if (!res.ok) {
        console.log("error");
      }
      const data = await res.json();
      setComments(() => data);
    };
    commentHandler();
  }, [props.id]);

  console.log(comments);
  return (
    <div className="bordered flex h-full min-w-[40%] flex-col items-center justify-between rounded rounded-l bg-base-300 p-8 font-bold shadow-lg xl:w-[40%] ">
      <h3 className="mb-5 items-start justify-start text-center text-4xl text-primary-content">
        Discussion
      </h3>
      <div className="flex h-full w-full flex-col items-start  justify-between font-bold">
        <div className="scrollbar  h-[88%] w-full overflow-y-auto">
          {comments &&
            comments.map((el: commentProps) => {
              return (
                <Comment
                  key={el.id}
                  name={el.name}
                  message={el.message}
                  time={el.date}
                />
              );
            })}
        </div>
        <Commentinput
          comments={comments}
          setComments={setComments}
          id={props.id}
        />
      </div>
    </div>
  );
};

export default CommentSection;
