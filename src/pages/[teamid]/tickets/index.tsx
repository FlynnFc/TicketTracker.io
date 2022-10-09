import Navbar from "../../../components/navbar/Navbar";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";
import { AiOutlineArrowRight } from "react-icons/ai";
import Drawer from "../../../components/drawer/Drawer";

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

type NewTicketProp = {
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

const Index = (props: { ticketprop: NewTicketProp }) => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[8vh]">
          <section className="ml-6 flex flex-wrap items-baseline justify-start space-x-6">
            {props.ticketprop.map(
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
                  />
                );
              }
            )}
          </section>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute top-16 left-0 lg:hidden"
          >
            <AiOutlineArrowRight />
          </label>
        </div>
        <Drawer />
      </div>
    </div>
  );
};

export default Index;
