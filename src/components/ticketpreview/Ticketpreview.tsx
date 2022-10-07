import Link from "next/link";
import React, { useEffect, useState } from "react";

type TicketpreviewProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
};

const Ticketpreview = (props: TicketpreviewProps) => {
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
      className={`card w-96 border-2 border-${bgColor}  flex flex-col items-start justify-center bg-neutral shadow-xl`}
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
            <button className="btn btn-outline">View Ticket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ticketpreview;
