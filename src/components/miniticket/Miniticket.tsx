import React from "react";

type MiniticketProps = {
  priority: string;
  title: string;
};

const Miniticket = (props: MiniticketProps) => {
  return (
    <div
      className={`w-96 bg-${props.priority} flex flex-row items-center justify-between rounded-lg p-4 text-primary-content`}
    >
      <h2 className="card-title px-1">{props.title}</h2>
      <div className="card-actions justify-end">
        <button className="btn">View Ticket</button>
      </div>
    </div>
  );
};

export default Miniticket;
