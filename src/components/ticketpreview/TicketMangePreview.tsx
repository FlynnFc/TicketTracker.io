import React, { useEffect, useState } from "react";

type funcProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
  complexity: string;
  ticketType: string;
};

type TicketpreviewProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
  complexity: string;
  ticketType: string;
  clickHandler: (props: funcProps) => unknown;
};

const TicketManagePreview = (props: TicketpreviewProps) => {
  const sendTicketInfo = () => {
    props.clickHandler(props);
  };
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    if (props.priority === "high") {
      setBgColor("error");
    } else if (props.priority === "medium") {
      setBgColor("warning");
    } else setBgColor("success");
  }, [props.priority]);

  return (
    <div
      onClick={sendTicketInfo}
      className={`card w-96 cursor-pointer border-2 border-${bgColor}  mr-2 ml-2 mb-4 flex flex-col items-start justify-center bg-neutral shadow-xl`}
    >
      <div className="card-body">
        <h2 className="card-title ">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TicketManagePreview;
