import Link from "next/link";
import React from "react";

type TicketpreviewProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
};

const Ticketpreview = (props: TicketpreviewProps) => {
  return (
    <div
      className={`card w-96 border border-${props.priority} flex flex-col items-center justify-center bg-base-300 shadow-xl`}
    >
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
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
