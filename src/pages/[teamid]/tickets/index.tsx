import Navbar from "../../../components/navbar/Navbar";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";
import { AiOutlineArrowRight } from "react-icons/ai";
import Drawer from "../../../components/drawer/Drawer";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/tickets");
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
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[8vh]">
          <section className="ml-6 flex flex-wrap items-stretch justify-center md:justify-start">
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
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button absolute top-16 left-0 z-20 lg:hidden"
      >
        <AiOutlineArrowRight />
      </label>
    </div>
  );
};

export default Index;
