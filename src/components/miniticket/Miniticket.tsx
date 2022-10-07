import Link from "next/link";
import React, { useEffect, useState } from "react";

type MiniticketProps = {
  priority: string;
  title: string;
  id: string;
};

const Miniticket = (props: MiniticketProps) => {
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
      className={`w-96 bg-${bgColor} flex flex-row items-center justify-between rounded-lg p-4 text-primary-content`}
    >
      <h2 className="card-title px-1 text-primary-content">{props.title}</h2>
      <div className="card-actions justify-end">
        <Link
          href={{
            pathname: "/[teamid]/tickets/[ticketid]",
            query: { teamid: "demo", ticketid: props.id },
          }}
        >
          <button className="btn text-secondary-content">View Ticket</button>
        </Link>
      </div>
    </div>
  );
};

export default Miniticket;
