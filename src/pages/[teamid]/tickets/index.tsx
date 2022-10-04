import Link from "next/link";
import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <section>
            <Ticketpreview
              priority="red-500"
              title="This is the first ticket"
              description="Testing functionality of the first ever ticket"
            />
          </section>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-60 space-y-2 overflow-y-auto bg-base-300 p-4 text-base-content">
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
              <button className="btn btn-info text-white">
                Manage Tickets
              </button>
            </li>
            <li>
              <a href="./tickets/Sheesh">Chomp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
