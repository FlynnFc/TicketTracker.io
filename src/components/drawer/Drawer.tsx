import React from "react";
import Link from "next/link";
const Drawer = () => {
  return (
    <div className="drawer-side overflow-hidden ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu mt-16 w-screen space-y-2  overflow-y-auto bg-base-300 p-4 text-base-content sm:w-60">
        <li>
          <Link
            href={{
              pathname: "/[teamid]/tickets",
              query: { teamid: "demo" },
            }}
          >
            <button className="btn btn-primary text-white">Tickets</button>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/[teamid]/tickets/create",
              query: { teamid: "demo" },
            }}
          >
            <button className="btn btn-info text-white">
              Create new Ticket
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/[teamid]/tickets/manage",
              query: { teamid: "demo" },
            }}
          >
            <button className="btn btn-secondary text-white">
              Manage Tickets
            </button>
          </Link>
        </li>
        <ul className="">
          <li>
            <Link
              href={{
                pathname: "/[teamid]/tickets/closed",
                query: { teamid: "demo" },
              }}
            >
              <button className="btn btn-ghost text-white">
                Closed Tickets
              </button>
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Drawer;
