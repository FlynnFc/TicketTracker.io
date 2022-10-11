import React from "react";
import Link from "next/link";
const Drawer = () => {
  return (
    <div className="drawer-side overflow-hidden">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu mt-16 w-60 space-y-2 overflow-y-auto bg-base-300 p-4 text-base-content">
        <li>
          <Link
            href={{
              pathname: "/[teamid]/tickets/create",
              query: { teamid: "demo" },
            }}
          >
            <button className="btn btn-primary text-white">
              Create new Ticket
            </button>
          </Link>
        </li>
        <li>
          <button className="btn btn-info text-white">Manage Tickets</button>
        </li>
        <li>
          <Link
            href={{
              pathname: "/[teamid]/tickets/[ticketid]",
              query: { teamid: "demo", ticketid: 2 },
            }}
          >
            <a href="./tickets/Sheesh">Chomp</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
