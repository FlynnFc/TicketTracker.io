import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Navbar from "../../../components/navbar/Navbar";
import TicketManagePreview from "../../../components/ticketpreview/TicketMangePreview";
import { toast, Toaster } from "react-hot-toast";

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

  const deleteHandler = () => {
    toast.promise(submitter(), {
      loading: "Deleting ticket...",
      success: <b>Ticket deleted</b>,
      error: <b>{`We could not delete this ticket`}</b>,
    });
  };

  const submitter = async () => {
    const response = await fetch("http://localhost:3000/api/deleteticketbyid", {
      method: "DELETE",
      body: JSON.stringify({ id: ticketInfo.id }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    setForm({
      title: "",
      description: "",
      ticketType: "",
      priority: "",
      complexity: "",
      assignedTo: "",
    });
    return await response.json;
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="mx-10 mt-20 flex flex-col text-neutral-content lg:flex-row">
        <section className="w-full items-center rounded bg-base-300 p-6 text-white shadow">
          <div
            onClick={deleteHandler}
            className="absolute w-min rounded-2xl bg-error p-3"
          >
            <AiOutlineDelete />
          </div>
          <h1 className="my-2 text-center text-2xl font-bold">Edit users</h1>
          <div>
            <form
              className="flex flex-col items-center justify-center space-y-2"
              action="#"
            >
              <div className="w-full max-w-sm">
                <input
                  type="text"
                  placeholder="title"
                  className="input w-full max-w-sm"
                  value={ticketInfo.title ? ticketInfo.title : "Ticket title"}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="w-full max-w-sm">
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
              </div>
              <div className="w-full max-w-sm">
                <select
                  onChange={(e) =>
                    setForm({ ...form, priority: e.target.value })
                  }
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
              </div>
              <div className="w-full max-w-sm">
                <select
                  onChange={(e) =>
                    setForm({ ...form, assignedTo: e.target.value })
                  }
                  value={
                    ticketInfo.assignedTo
                      ? ticketInfo.assignedTo
                      : "Assigned to"
                  }
                  className="select w-full max-w-sm"
                >
                  <option disabled selected>
                    Assigned to
                  </option>
                  <option>Need to add users here</option>
                </select>{" "}
              </div>
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
