import Link from "next/link";
import React, { useEffect, useState } from "react";

type funcProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
};

type TicketpreviewProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
  clickHandler: (props: funcProps) => any;
};

const Ticketpreview = (props: TicketpreviewProps) => {
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
      className={`card w-96 border-2 border-${bgColor}  m-2 flex flex-col items-start justify-center bg-neutral text-primary-content shadow-xl`}
    >
      <div className="card-body ">
        <h2 className="card-title ">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-start">
          <Link
            href={{
              pathname: "/[teamid]/tickets/[ticketid]",
              query: { teamid: "demo", ticketid: props.id },
            }}
          >
            <button className="btn btn-primary text-neutral-content">
              View Ticket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ticketpreview;
