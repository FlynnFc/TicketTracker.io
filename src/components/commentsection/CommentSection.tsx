import React from "react";
import Commentinput from "../../commentinput/Commentinput";
import Comment from "../comment/Comment";

const CommentSection = () => {
  return (
    <div className="flex w-[40%] flex-col items-center justify-start font-bold">
      <h3 className="text-4xl text-primary">Discussion</h3>
      <div className="scrollbar bordered my-4 overflow-y-auto rounded-l border-2 border-primary bg-base-100 shadow-lg">
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
