import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Ticketpreview from "../../../components/ticketpreview/Ticketpreview";
import { AiOutlineArrowRight } from "react-icons/ai";
import Drawer from "../../../components/drawer/Drawer";

const Index = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-[8vh]">
          <section>
            <Ticketpreview
              id="1"
              priority="red-500"
              title="This is the first ticket"
              description="Testing functionality of the first ever ticket"
            />
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
