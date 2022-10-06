import React from "react";

type CommentProps = {
  name: string;
  message: string;
  time: string;
};

const Comment = (props: CommentProps) => {
  return (
    <div className="m-4 flex flex-row space-y-4 ">
      <div className="">
        <div className="avatar mr-1">
          <div className="w-12 rounded">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
      <section className="flex flex-col rounded bg-primary p-4 shadow-lg">
        <div className="flew-row flex space-x-4">
          <h4>{props.name}</h4>
          <span>{props.time}</span>
        </div>
        <p className="py-4">{props.message}</p>
      </section>
    </div>
  );
};

export default Comment;