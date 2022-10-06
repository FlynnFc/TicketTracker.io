import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/navbar/Navbar";
import CommentSection from "../../../../components/commentsection/CommentSection";
import Drawer from "../../../../components/drawer/Drawer";
import { AiOutlineArrowRight } from "react-icons/ai";

const TicketDetails = () => {
  const router = useRouter();
  const { ticketid } = router.query;
  console.log(router);
  return (
    <div className="">
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[5vh] flex flex-col items-start justify-start">
          <div className="mt-5 flex items-center justify-center">
            <section className="w-[98%] rounded-lg p-4">
              <div>
                <div className="flex max-h-[47rem] justify-evenly">
                  <div className="flex w-[50%] flex-col items-center justify-between rounded bg-base-300 shadow-lg">
                    <div>
                      <h2 className="m-4 text-center text-4xl font-bold text-primary">
                        Details for Ticket {ticketid}
                      </h2>
                      <ul className="mx-4 flex flex-row items-start justify-start space-x-10 py-4 text-2xl">
                        <li className="flex flex-col  justify-center">
                          <h3 className="font-bold">Ticket Title</h3>
                          <p>Example Title</p>
                        </li>
                        <li className="flex flex-col justify-center">
                          <h4 className="font-bold ">Ticket Description</h4>
                          <p>Example Description</p>
                        </li>
                        <li className="flex flex-col justify-center">
                          <h4 className="font-bold ">Ticket type</h4>
                          <p>Bug</p>
                        </li>
                      </ul>
                      <ul className="mx-4 flex flex-row items-start justify-start space-x-10 py-4 text-2xl">
                        <li className="flex flex-col">
                          <h4 className="font-bold ">Assigned Developer</h4>
                          <p>Example Dev</p>
                        </li>
                        <li className="flex flex-col items-start">
                          <h4 className="font-bold ">Project</h4>
                          <p>Example Project</p>
                        </li>
                        <li className="flex flex-col">
                          <h4 className="font-bold ">Priority</h4>
                          <p>high</p>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-12 w-[90%] overflow-y-auto">
                      {" "}
                      <h3 className="m-4 text-center text-4xl font-bold text-primary">
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
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute lg:hidden"
          >
            <AiOutlineArrowRight />
          </label>
        </div>
        <Drawer />
      </div>
    </div>
  );
};

export default TicketDetails;
