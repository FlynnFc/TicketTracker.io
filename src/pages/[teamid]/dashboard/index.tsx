import React, { useEffect, useState } from "react";
import Miniticket from "../../../components/miniticket/Miniticket";
import Drawer from "../../../components/drawer/Drawer";
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineProject,
} from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import Iconbigger from "../../../components/IconBigger/IconBigger";
import MyResponsiveBar from "../../../components/MyResponsiveBar";
import TicketTypeBar from "../../../components/TicketTypeBar";

export async function getServerSideProps() {
  const res = await fetch("https://www.tickettracker.io/api/tickets");
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

type newTicketProps = {
  forEach(
    arg0: (el: {
      priority: string;
      description: string;
      title: string;
      id: string;
    }) => void
  ): unknown;
  length: number;
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

const Index = (props: { ticketprop: newTicketProps }) => {
  const [showClose, setShowClose] = useState(false);
  const [totalTickets, setTotalTickets] = useState(0);
  const [completedTickets, setCompletedTickets] = useState(0);
  const [, setTicketType] = useState<object>();
  useEffect(() => {
    setTotalTickets(() => props.ticketprop.length);
  }, [props.ticketprop]);
  useEffect(() => {
    const closedFinder = async () => {
      const res2 = await fetch("/api/closedtickets", {
        method: "GET",
      });
      if (!res2.ok) {
        console.log("error");
      }
      const data2 = await res2.json();
      setTicketType(props.ticketprop);
      setCompletedTickets(() => data2.length);
    };
    closedFinder();
  }, [props.ticketprop]);

  return (
    <>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-20 ml-4 flex flex-col justify-between">
          <section className="z-10 flex space-x-4 lg:static">
            <div className="flex flex-row items-center justify-center space-y-2 rounded bg-primary p-4 text-primary-content">
              <div className="mr-8 flex flex-col">
                <h4 className="text-2xl">Project Status</h4>
                <span className="text-3xl font-bold">45%</span>
              </div>
              <Iconbigger>
                <AiOutlineProject />
              </Iconbigger>
            </div>
            <div className="flex flex-row items-center justify-center space-y-2 rounded bg-info  p-4 text-primary-content">
              <div className="mr-8 flex flex-col">
                <h4 className="text-2xl">Total Active Tickets</h4>
                <span className="text-3xl font-bold">{totalTickets}</span>
              </div>
              <Iconbigger>
                <HiOutlineTicket />
              </Iconbigger>
            </div>
            <div className="flex flex-row items-center justify-center space-y-2 rounded bg-secondary p-4 text-primary-content">
              <div className="mr-8 flex flex-col">
                <h4 className="text-2xl">Completed Tickets</h4>
                <span className="text-3xl font-bold">{completedTickets}</span>
              </div>
              <Iconbigger>
                <HiOutlineTicket />
              </Iconbigger>
            </div>
          </section>
          <section className="z-0 flex h-full w-full flex-col items-center justify-center lg:flex-row lg:justify-start lg:space-x-4">
            <MyResponsiveBar
              totalTickets={totalTickets}
              completedTickets={completedTickets}
              Active={2}
              qa={3}
            />

            <TicketTypeBar />
          </section>

          <section
            id="minitickets"
            className="hidden w-full flex-row justify-start md:flex"
          >
            {props.ticketprop.map(
              (el: {
                priority: string;
                description: string;
                title: string;
                id: string;
              }) => {
                return (
                  <Miniticket
                    key={el.id}
                    title={el.title}
                    priority={el.priority}
                    id={el.id}
                  />
                );
              }
            )}
          </section>
        </div>
        <label
          onClick={() => {
            setShowClose((prev) => !prev);
          }}
          htmlFor="my-drawer-2"
          className={`btn ${
            showClose ? "btn-error" : "btn-primary"
          } drawer-button fixed bottom-6 right-6 z-40 lg:hidden`}
        >
          {showClose ? <AiOutlineClose /> : <AiOutlineArrowRight />}
        </label>
        <Drawer />
      </div>
    </>
  );
};

export default Index;
