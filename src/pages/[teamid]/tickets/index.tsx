import Navbar from "../../../components/navbar/Navbar";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Drawer from "../../../components/drawer/Drawer";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://www.tickettracker.io/api/tickets");
  if (!res.ok) {
    console.error(res.status);
  }
  const data = await res.json();
  return {
    props: {
      ticketprop: data,
    },
  };
}

type NewTicketProps = {
  map(
    arg0: (el: {
      priority: string;
      description: string;
      title: string;
      id: string;
    }) => JSX.Element
  ): import("react").ReactNode;
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
};

const Index = (props: { ticketprop: NewTicketProps }) => {
  const [tickets, setTickets] = useState<NewTicketProps>();
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    setTickets(props.ticketprop);
  }, [props.ticketprop]);
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[8vh]">
          <section className="ml-6 flex flex-wrap items-stretch justify-center md:justify-start">
            {tickets &&
              tickets.map(
                (el: {
                  priority: string;
                  description: string;
                  title: string;
                  id: string;
                }) => {
                  return (
                    <Ticketpreview
                      key={el.id}
                      title={el.title}
                      description={el.description}
                      priority={el.priority}
                      id={el.id}
                      assignedTo={""}
                    />
                  );
                }
              )}
          </section>
        </div>
        <Drawer />
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
    </div>
  );
};

export default Index;
