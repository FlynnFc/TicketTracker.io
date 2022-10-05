import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/navbar/Navbar";
import CommentSection from "../../../../components/commentsection/CommentSection";

const TicketDetails = () => {
  const router = useRouter();
  const { ticketid } = router.query;
  console.log(router);
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="mt-10 flex items-center justify-center">
        <section className="w-[80%] rounded-lg border-2 border-green-500 bg-neutral p-4 shadow-lg">
          <div>
            <h2 className="m-4 text-center text-5xl font-bold text-primary-content">
              Details for Ticket {ticketid}
            </h2>
            <div className="flex max-h-[42rem] flex-row justify-between">
              <div className="w-[50%]">
                <ul className="mx-4 flex flex-row items-start justify-evenly py-4 text-2xl">
                  <li className="flex flex-col  justify-center space-x-4">
                    <h3 className="font-bold text-white">Ticket Title</h3>
                    <p>Example Title</p>
                  </li>
                  <li className="flex flex-col justify-center  space-x-4">
                    <h4 className="font-bold text-white">Ticket Description</h4>
                    <p>Example Description</p>
                  </li>
                </ul>
                <ul className="flex flex-row items-start justify-evenly py-4 text-2xl">
                  <li className="flex flex-col space-x-4">
                    <h4 className="font-bold text-white">Assigned Developer</h4>
                    <p>Example Dev</p>
                  </li>
                  <li className="flex flex-col items-start space-x-4">
                    <h4 className="font-bold text-white">Project</h4>
                    <p>Example Project</p>
                  </li>
                  <li className="flex flex-col space-x-4">
                    <h4 className="font-bold text-white">Priority</h4>
                    <p>high</p>
                  </li>
                </ul>
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
