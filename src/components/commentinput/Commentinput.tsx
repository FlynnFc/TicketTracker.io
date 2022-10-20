import React, { createRef, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const Commentinput = (props: any) => {
  const { data: session } = useSession();
  const [commentInfo, setCommentInfo] = useState({
    name: session?.user?.name,
    message: "",
    ticketId: props.id,
    avatar: "e",
  });

  const submitterPost = async () => {
    const response = await fetch("/api/newComment", {
      method: "POST",
      body: JSON.stringify(commentInfo),
    });
    if (!response.ok) {
      console.error(response.statusText);
    }

    setCommentInfo({
      name: session?.user?.name,
      message: commentInfo.message,
      ticketId: props.id,
      avatar: "",
    });
    props.setComments([...props.comments, commentInfo]);
    return await response.json;
  };

  return (
    <div className="flex w-full flex-row items-stretch justify-center">
      <input
        onChange={(e) =>
          setCommentInfo({ ...commentInfo, message: e.target.value })
        }
        type="text"
        placeholder="Type here"
        className="input h-auto w-full max-w-xl rounded-r-none bg-neutral p-4 text-xl shadow-xl focus:outline-none"
      />
      <button
        onClick={() => {
          if (commentInfo.message) {
            submitterPost();
          }
        }}
        className="btn btn-square h-auto w-auto rounded-l-none border-l-0 bg-primary p-2 text-xl text-white"
      >
        Send
      </button>
    </div>
  );
};

export default Commentinput;