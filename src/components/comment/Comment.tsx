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
          <h4 className="text-xl text-primary-content">{props.name}</h4>
          <span className="text-base-content">{props.time}</span>
        </div>
        <p
          className="py-4 text-primary-content
"
        >
          {props.message}
        </p>
      </section>
    </div>
  );
};

export default Comment;
