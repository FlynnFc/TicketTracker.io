import Navbar from "../../../components/navbar/Navbar";
import { useSession } from "next-auth/react";
import React from "react";
import Miniticket from "../../../components/miniticket/Miniticket";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";
import Drawer from "../../../components/drawer/Drawer";

type newTicketProps = {
  map(
    arg0: (el: {
      priority: string;
      description: string;
      title: string;
      id: string;
    }) => JSX.Element
  ): React.ReactNode;
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
};

export async function getServerSideProps() {
  const res = await fetch("https://www.tickettracker.io/api/closedtickets", {
    method: "GET",
  });
  if (!res.ok) {
    console.log("error");
  }
  const data = await res.json();
  return {
    props: {
      ticketprop: data,
    },
  };
}
const Closed = (props: { ticketprop: newTicketProps }) => {
  const session = useSession();
  return (
    <>
      <Navbar />

      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[8vh]">
          {session ? (
            <div>
              <section className="top-16 left-2 flex w-full flex-row justify-start">
                {props.ticketprop.map((el: any) => {
                  return (
                    <Ticketpreview
                      key={el.id}
                      title={el.title}
                      priority={el.priority}
                      id={el.id}
                      description={el.description}
                      assignedTo={el.assignedTo}
                    />
                  );
                })}
              </section>
            </div>
          ) : (
            <>
              <Navbar />
              <h3 className="text-center text-3xl font-bold">{`You don't have permission to acsess this page`}</h3>
            </>
          )}
        </div>
        <Drawer />
      </div>
    </>
  );
};

export default Closed;
