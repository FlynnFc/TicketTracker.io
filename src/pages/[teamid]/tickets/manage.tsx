import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import TicketManagePreview from "../../../components/ticketpreview/TicketMangePreview";

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
      assignedTo: string;
    }) => JSX.Element
  ): import("react").ReactNode;
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
};

type TickProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
};

const Managetickets = (props: { ticketprop: NewTicketProp }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    ticketType: "",
    priority: "",
    complexity: "",
    assignedTo: "",
  });
  const [ticketInfo, setTicketInfo] = useState({
    priority: "",
    title: "",
    description: "",
    id: "",
    assignedTo: "",
  });
  const onSelectHandler = (ticketProps: TickProps) => {
    console.log(ticketProps);
    setTicketInfo({
      priority: ticketProps.priority,
      title: ticketProps.title,
      description: ticketProps.description,
      id: ticketProps.id,
      assignedTo: ticketProps.assignedTo,
    });
  };
  return (
    <>
      <Navbar />
      <div className="mt-20 ml-10 flex flex-col space-x-10 text-neutral-content lg:flex-row">
        <section className="w-full items-center rounded bg-base-300 p-6 text-white shadow">
          <div>
            <h1 className="my-2 text-center text-2xl font-bold">Edit users</h1>
          </div>
          <div>
            <form
              className="flex flex-col items-center justify-center space-y-2"
              action="#"
            >
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="title"
                className="input w-full max-w-sm"
                value={ticketInfo.title ? ticketInfo.title : "Ticket title"}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                type="description"
                placeholder="description"
                className="input w-full max-w-sm focus:border-none"
                value={
                  ticketInfo.description
                    ? ticketInfo.description
                    : "description"
                }
              />
              <select
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
                value={ticketInfo.priority ? ticketInfo.priority : "Priority"}
                className="select w-full max-w-sm"
              >
                <option disabled selected>
                  Priority
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
              <select
                onChange={(e) =>
                  setForm({ ...form, assignedTo: e.target.value })
                }
                value={
                  ticketInfo.assignedTo ? ticketInfo.assignedTo : "Assigned to"
                }
                className="select w-full max-w-sm"
              >
                <option disabled selected>
                  Assigned to
                </option>
                <option>Need to add users here</option>
              </select>
            </form>
          </div>
        </section>
        <section className="flex flex-wrap items-baseline justify-center  overflow-y-auto">
          {props.ticketprop.map((el) => {
            return (
              <>
                <TicketManagePreview
                  clickHandler={onSelectHandler}
                  key={el.id}
                  title={el.title}
                  description={el.description}
                  priority={el.priority}
                  id={el.id}
                  assignedTo={el.assignedTo}
                />
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Managetickets;
