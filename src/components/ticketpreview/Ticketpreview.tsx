import React from "react";

type TicketpreviewProps = {
  priority: string;
  title: string;
  description: string;
};

const Ticketpreview = (props: TicketpreviewProps) => {
  return (
    <div
      className={`card w-96 border border-${props.priority} flex flex-col items-center justify-center bg-base-300 shadow-xl`}
    >
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline">View Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Ticketpreview;
