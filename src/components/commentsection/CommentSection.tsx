import React from "react";
import Commentinput from "../../commentinput/Commentinput";
import Comment from "../comment/Comment";

const CommentSection = () => {
  return (
    <div className="flex max-h-[40rem] flex-col items-center justify-start rounded bg-base-300 p-4 font-bold shadow-lg xl:w-[40%]">
      <h3 className="m-2 text-4xl  text-primary-content">Discussion</h3>
      <div className="scrollbar bordered my-4 overflow-y-auto rounded-l bg-base-300">
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />{" "}
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />{" "}
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />{" "}
        <Comment
          name="Sarah"
          time="2:30pm"
          message="Testing the comment ui Testing the comment uiTesting the comment ui Testing the comment ui"
        />
      </div>
      <Commentinput />
    </div>
  );
};

export default CommentSection;
