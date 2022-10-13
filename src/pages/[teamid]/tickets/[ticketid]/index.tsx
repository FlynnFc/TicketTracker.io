import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/navbar/Navbar";
import CommentSection from "../../../../components/commentsection/CommentSection";

import { AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

type TicketProps = {
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
  completed: boolean;
};

const TicketDetails = () => {
  const [pageData, setPageData] = useState<TicketProps>();
  const [showClose, setShowClose] = useState(false);
  const router = useRouter();
  const { ticketid } = router.query;

  async function ticketFetchIdHandler(ticketid: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ticketbyid = await fetch("http://localhost:3000/api/ticketbyid", {
      method: "GET",
      headers: { ticketId: ticketid },
    });
    if (!ticketbyid.ok) {
      console.log("error");
    }
    const data = await ticketbyid.json();
    setPageData(() => data);
    console.log(data);
  }
  useEffect(() => {
    ticketFetchIdHandler(ticketid);
  }, [ticketid]);

  const closeTicketHandler = async (props: boolean) => {
    const response = await fetch("http://localhost:3000/api/editTicket", {
      method: "PUT",
      body: JSON.stringify({ completed: props, id: ticketid }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    ticketFetchIdHandler(ticketid);
    return await response.json;
  };

  const ticketOpener = async () => {
    toast.promise(closeTicketHandler(false), {
      loading: "Opening Ticket...",
      success: <b>Ticket opened</b>,
      error: <b>Could not open this ticket</b>,
    });
  };

  const ticketCloser = async () => {
    toast.promise(closeTicketHandler(true), {
      loading: "Closing Ticket...",
      success: <b>Ticket Closed</b>,
      error: <b>Could not close this ticket</b>,
    });
  };

  return (
    <div className="">
      <Navbar />
      {pageData && (
        <div className="drawer-mobile drawer">
          <Toaster />

          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mt-[5vh] flex flex-col items-start justify-start">
            <div
              className={`mt-5 flex h-full items-center justify-center ${
                pageData.completed && "border-8 border-error"
              }`}
            >
              <section className="w-[98%] rounded-lg p-4">
                <div>
                  <div className=" flex flex-col items-stretch space-y-4 overflow-auto xl:mt-0 xl:max-h-[47rem] xl:flex-row xl:items-start xl:justify-evenly xl:space-y-0">
                    <div className="flex flex-col items-center justify-between rounded bg-base-300 shadow-lg xl:w-[50%]">
                      <div>
                        <h2 className="m-4 flex flex-col text-center text-4xl font-bold text-primary-content">
                          Details for Ticket
                          <span className="text-base">id: {ticketid}</span>
                        </h2>
                        <ul className="mx-4 flex flex-row items-start justify-evenly space-x-10 py-4 text-xl">
                          <li className="flex flex-col  justify-center text-center">
                            <h3 className="font-bold">Ticket Title</h3>
                            <p>{pageData.title}</p>
                          </li>
                          <li className="flex max-w-sm flex-col justify-center text-center">
                            <h4 className="font-bold ">Ticket Description</h4>
                            <p>{pageData.description}</p>
                          </li>
                          <li className="flex flex-col justify-center text-center">
                            <h4 className="font-bold ">Ticket type</h4>
                            <p>{pageData.ticketType}</p>
                          </li>
                        </ul>
                        <ul className="mx-4 flex flex-row items-start justify-evenly space-x-10 py-4 text-xl">
                          <li className="flex flex-col text-center">
                            <h4 className="font-bold ">Assigned Developer</h4>
                            <p>
                              {pageData.assignedTo
                                ? pageData.assignedTo
                                : "No one assigned"}
                            </p>
                          </li>
                          <li className="flex flex-col items-start text-center">
                            <h4 className="font-bold ">Project</h4>
                            <p>Example Project</p>
                          </li>
                          <li className="flex flex-col text-center">
                            <h4 className="font-bold ">Priority</h4>
                            <p>{pageData.priority}</p>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-12 w-[90%] overflow-y-auto">
                        {" "}
                        <h3 className="m-4 text-center text-4xl font-bold  text-primary-content">
                          Ticket History
                        </h3>
                        <table className="table w-full ">
                          <thead>
                            <tr>
                              <th>Property</th>
                              <th>Previous Value</th>
                              <th>New Value</th>
                              <th>Date Changed</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>AssignedUserId</td>
                              <td>John Doe</td>
                              <td>Mike Smith</td>
                              <td>{new Date().toDateString()}</td>
                            </tr>
                            <tr>
                              <td>Ticket Title</td>
                              <td>Example Ticket</td>
                              <td>Fix image upload button</td>
                              <td>{new Date().toDateString()}</td>
                            </tr>
                            <tr>
                              <td>Priority</td>
                              <td>Medium</td>
                              <td>High</td>
                              <td>{new Date().toDateString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <CommentSection />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="drawer-side z-0 overflow-hidden ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu mt-16 w-screen space-y-2 bg-base-300 p-4 text-base-content sm:w-60">
              {pageData.completed ? (
                <>
                  <button onClick={ticketOpener} className="btn btn-error">
                    Open ticket
                  </button>
                </>
              ) : (
                <button
                  onClick={ticketCloser}
                  className="btn btn-success font-bold"
                >
                  Close ticket
                </button>
              )}
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
                <Link
                  href={{
                    pathname: "/[teamid]/tickets/manage",
                    query: { teamid: "demo" },
                  }}
                >
                  <button className="btn btn-info text-white">
                    Manage Tickets
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/[teamid]/tickets/[ticketid]",
                    query: { teamid: "demo", ticketid: 2 },
                  }}
                >
                  <a href="./tickets/Sheesh">Chomp</a>
                </Link>
              </li>
            </ul>
          </div>
          <label
            onClick={() => {
              setShowClose((prev) => !prev);
            }}
            htmlFor="my-drawer-2"
            className={`btn ${
              showClose ? "btn-error" : "btn-primary"
            } drawer-button fixed bottom-6 right-6 z-0 sm:hidden lg:hidden`}
          >
            {showClose ? <AiOutlineClose /> : <FaLongArrowAltRight />}
          </label>
        </div>
      )}
    </div>
  );
};

export default TicketDetails;
