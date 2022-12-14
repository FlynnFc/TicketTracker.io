import { useState } from "react";
import Drawer from "../../../components/drawer/Drawer";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
interface Formdata {
  title: string;
  description: string;
  ticketType: string;
  priority: string;
  complexity: string;
  assignedTo?: string;
}

const Create = () => {
  const [form, setForm] = useState<Formdata>({
    title: "",
    description: "",
    ticketType: "",
    priority: "",
    complexity: "",
    assignedTo: "",
  });
  const [showClose, setShowClose] = useState(false);
  const submitHandler = async () => {
    if (
      form.ticketType &&
      form.complexity &&
      form.description &&
      form.priority &&
      form.title
    ) {
      toast.promise(submitter(), {
        loading: "Creating new ticket...",
        success: <b>Ticket Created!</b>,
        error: <b>{`We could not proccess this ticket`}</b>,
      });
    } else toast.error("You need to complete the form");
  };

  const submitter = async () => {
    const response = await fetch("/api/newTickets", {
      method: "POST",
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
    });
    return await response.json;
  };

  return (
    <>
      <Toaster />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex w-[85%] items-center justify-center">
          <div className="flex w-[80%] flex-col  rounded-2xl bg-base-300 p-12 md:mx-auto xl:w-[50%]">
            <h1 className="text-center text-3xl font-bold text-base-content">
              Creating a new ticket
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
              }}
              method="post"
              className="mt-4 flex flex-col space-y-4 text-base-content"
            >
              <label htmlFor="title" className="text-xl font-medium">
                Ticket Title
              </label>
              <input
                required
                type="text"
                className="rounded-lg bg-base-100 p-2 "
                placeholder="Event title"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                value={form.title}
              />
              <label htmlFor="last" className="text-xl font-medium">
                Further details
              </label>
              <input
                value={form.description}
                required
                type="text"
                className="rounded-lg bg-base-100 p-2 "
                placeholder="description"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              <div className="flex w-full flex-col">
                <label htmlFor="first" className="my-2 text-xl font-medium">
                  Ticket type
                </label>

                <select
                  required
                  className="select w-full"
                  value={
                    form.ticketType
                      ? form.ticketType
                      : "Choose the type of ticket"
                  }
                  onChange={(e) =>
                    setForm({ ...form, ticketType: e.target.value })
                  }
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

              <div className="flex w-full flex-col">
                <label htmlFor="first" className="my-2 text-xl font-medium">
                  Priority
                </label>

                <select
                  required
                  className="select w-full"
                  value={
                    form.priority
                      ? form.priority
                      : "Choose the priority of this ticket"
                  }
                  onChange={(e) =>
                    setForm({ ...form, priority: e.target.value })
                  }
                >
                  <option disabled>Choose the priority of this ticket</option>
                  <option>Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option>Critical</option>
                </select>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="first" className="my-2 text-xl font-medium">
                  Complexity
                </label>

                <select
                  required
                  className="select w-full"
                  value={
                    form.complexity
                      ? form.complexity
                      : "Choose the Complexity of this ticket"
                  }
                  onChange={(e) =>
                    setForm({ ...form, complexity: e.target.value })
                  }
                >
                  <option disabled>Choose the Complexity of this ticket</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-primary p-2 text-2xl font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>{" "}
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
export default Create;
