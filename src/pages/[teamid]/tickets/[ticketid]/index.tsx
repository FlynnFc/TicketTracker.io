import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/navbar/Navbar";
import CommentSection from "../../../../components/commentsection/CommentSection";

const TicketDetails = () => {
  const router = useRouter();
  const { ticketid } = router.query;
  console.log(router);
  return (
    <div className="">
      <Navbar />
      <div className="mt-10 flex items-center justify-center">
        <section className="w-[98%] rounded-lg p-4">
          <div>
            <div className="flex max-h-[47rem] flex-row justify-evenly">
              <div className="flex w-[40%] flex-col items-center rounded bg-base-300 shadow-lg">
                <h2 className="m-4 text-center text-4xl font-bold text-primary">
                  Details for Ticket {ticketid}
                </h2>
                <ul className="mx-4 flex flex-row items-start justify-start space-x-10 py-4 text-2xl">
                  <li className="flex flex-col  justify-center">
                    <h3 className="font-bold text-white">Ticket Title</h3>
                    <p>Example Title</p>
                  </li>
                  <li className="flex flex-col justify-center">
                    <h4 className="font-bold text-white">Ticket Description</h4>
                    <p>Example Description</p>
                  </li>
                  <li className="flex flex-col justify-center">
                    <h4 className="font-bold text-white">Ticket type</h4>
                    <p>Bug</p>
                  </li>
                </ul>
                <ul className="mx-4 flex flex-row items-start justify-start space-x-10 py-4 text-2xl">
                  <li className="flex flex-col">
                    <h4 className="font-bold text-white">Assigned Developer</h4>
                    <p>Example Dev</p>
                  </li>
                  <li className="flex flex-col items-start">
                    <h4 className="font-bold text-white">Project</h4>
                    <p>Example Project</p>
                  </li>
                  <li className="flex flex-col">
                    <h4 className="font-bold text-white">Priority</h4>
                    <p>high</p>
                  </li>
                </ul>
                <table>
                  <th>
                    <tr>
                      <td>Property</td>
                      <td>Previous Value</td>
                      <td>New Value</td>
                      <td>Date Changed</td>
                    </tr>
                  </th>
                  <tbody>
                    <tr>
                      <td>assignedToUserId</td>
                      <td>John Doe</td>
                      <td>James Smith</td>
                      <td>{new Date().toString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <CommentSection />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketDetails;
