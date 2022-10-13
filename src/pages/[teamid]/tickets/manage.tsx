import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import TicketManagePreview from "../../../components/ticketpreview/TicketMangePreview";
import { toast, Toaster } from "react-hot-toast";
import Modal from "../../../components/modal/Modal";

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

type NewTicketProp = {
  map(
    arg0: (el: {
      ticketType: string;
      complexity: string;
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
  complexity: string;
};

type TickProps = {
  priority: string;
  title: string;
  description: string;
  id: string;
  assignedTo: string;
  ticketType: string;
  complexity: string;
};

const Managetickets = (props: { ticketprop: NewTicketProp }) => {
  const [submitActive, setSubmitActive] = useState(true);
  const [ticketInfo, setTicketInfo] = useState({
    priority: "",
    title: "",
    description: "",
    id: "",
    assignedTo: "",
    complexity: "",
    ticketType: "",
  });
  const [form, setForm] = useState({
    title: "title",
    description: "description",
    ticketType: "",
    priority: "Priority",
    complexity: "",
    assignedTo: "",
    id: ticketInfo.id,
  });

  const onSelectHandler = (ticketProps: TickProps) => {
    console.log(ticketProps);
    setTicketInfo({
      priority: ticketProps.priority,
      title: ticketProps.title,
      description: ticketProps.description,
      id: ticketProps.id,
      assignedTo: ticketProps.assignedTo,
      complexity: ticketProps.complexity,
      ticketType: ticketProps.ticketType,
    });
  };

  const deleteHandler = () => {
    toast.promise(submitter(), {
      loading: "Deleting ticket...",
      success: <b>Ticket deleted</b>,
      error: <b>{`Could not delete this ticket`}</b>,
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
      priority: "Priority",
      complexity: "",
      assignedTo: "",
      id: "",
    });
    const res = await response.json;
    return res;
  };

  const revertHandler = () => {
    setForm({
      title: ticketInfo.title,
      description: ticketInfo.description,
      ticketType: ticketInfo.ticketType,
      priority: ticketInfo.priority,
      complexity: ticketInfo.complexity,
      assignedTo: ticketInfo.assignedTo,
      id: ticketInfo.id,
    });
    setSubmitActive(true);
  };

  useEffect(() => {
    setSubmitActive(true);
    setForm({
      title: ticketInfo.title,
      description: ticketInfo.description,
      ticketType: ticketInfo.ticketType,
      priority: ticketInfo.priority,
      complexity: ticketInfo.complexity,
      assignedTo: ticketInfo.assignedTo,
      id: ticketInfo.id,
    });
  }, [ticketInfo]);

  const submitterPost = async () => {
    const response = await fetch("http://localhost:3000/api/editTicket", {
      method: "PUT",
      body: JSON.stringify(form),
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
      id: "",
    });
    getServerSideProps();
    return await response.json;
  };

  const submitHandler = async () => {
    toast.promise(submitterPost(), {
      loading: "Editing ticket...",
      success: <b>Ticket Edited</b>,
      error: <b>{`We could not edit this ticket`}</b>,
    });
  };

  return (
    <div className="max-h-[80vh]">
      <Navbar />
      <Toaster />
      <div className="mt-20 flex flex-col items-start justify-center text-neutral-content md:mx-10 lg:flex-row">
        <section className="top-10 z-10 w-full min-w-max items-center rounded bg-base-300 p-6 text-white shadow lg:sticky">
          <h1 className="my-2 text-center text-2xl font-bold">Edit users</h1>
          <div>
            <form
              className="flex flex-col items-center justify-center space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
              }}
              method="post"
            >
              <div className="w-full max-w-sm">
                <input
                  type="text"
                  placeholder="title"
                  className="input w-full max-w-sm"
                  value={form.title}
                  onChange={(e) => {
                    if (ticketInfo.id) {
                      setSubmitActive(false);
                      setForm({ ...form, title: e.target.value });
                    } else setSubmitActive(true);
                  }}
                />
              </div>
              <div className="w-full max-w-sm">
                <input
                  onChange={(e) => {
                    if (ticketInfo.id) {
                      setSubmitActive(false);
                      setForm({ ...form, description: e.target.value });
                    } else setSubmitActive(true);
                  }}
                  type="description"
                  placeholder="description"
                  className="input w-full max-w-sm focus:border-none"
                  value={form.description}
                />
              </div>
              <div className="w-full max-w-sm">
                <select
                  onChange={(e) => {
                    if (ticketInfo.id) {
                      setSubmitActive(false);
                      setForm({ ...form, priority: e.target.value });
                    } else setSubmitActive(true);
                  }}
                  value={form.priority ? form.priority : "Priority"}
                  className="select w-full max-w-sm"
                >
                  <option disabled selected>
                    Priority
                  </option>
                  <option>Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option>Critical</option>
                </select>
              </div>
              <div className="w-full max-w-sm">
                <select
                  onChange={(e) =>
                    setForm({ ...form, assignedTo: e.target.value })
                  }
                  value={form.assignedTo}
                  className="select w-full max-w-sm"
                >
                  <option disabled selected>
                    Assigned to
                  </option>
                  <option>Need to add users here</option>
                </select>
              </div>
              <div className="w-full max-w-sm">
                <select
                  required
                  className="select w-full"
                  value={
                    form.ticketType
                      ? form.ticketType
                      : "Choose the type of ticket"
                  }
                  onChange={(e) => {
                    if (ticketInfo.id) {
                      setSubmitActive(false);
                      setForm({ ...form, ticketType: e.target.value });
                    } else setSubmitActive(true);
                  }}
                >
                  <option disabled selected>
                    Choose the type of ticket
                  </option>
                  <option>Bug</option>
                  <option>Feature</option>
                  <option>Support/Advice</option>
                  <option>Task</option>
                </select>
              </div>
              <div className="w-full max-w-sm">
                <select
                  required
                  className="select w-full"
                  value={
                    form.complexity
                      ? form.complexity
                      : "Choose the Complexity of this ticket"
                  }
                  onChange={(e) => {
                    if (ticketInfo.id) {
                      setSubmitActive(false);
                      setForm({ ...form, complexity: e.target.value });
                    } else setSubmitActive(true);
                  }}
                >
                  <option disabled>Choose the Complexity of this ticket</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div className="flex w-full max-w-sm flex-row justify-between lg:space-x-2">
                <button
                  disabled={submitActive}
                  type="submit"
                  className="btn btn-primary lg:max-w-[10rem]"
                >
                  Save Changes
                </button>
                <button
                  disabled={submitActive}
                  type="button"
                  className="btn btn-warning lg:max-w-[10rem]"
                  onClick={revertHandler}
                >
                  Revert to original
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <Modal deleteHandler={deleteHandler} />
            </div>
          </div>
        </section>
        <section className="z-0 flex flex-wrap items-stretch justify-center">
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
                  complexity={el.complexity}
                  ticketType={el.ticketType}
                />
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Managetickets;
