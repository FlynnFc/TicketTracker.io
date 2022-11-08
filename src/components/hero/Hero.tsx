import React from "react";
// import Image from "next/image";
// import testerImage from "../../images/tester.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Tickettracker.io</h1>
          <p className=" text-xl">
            A New look at Team, Project and Ticket Management systems.
          </p>
          <section className="py-6 ">
            <p className="text-base ">
              This site is still currently in early development.
            </p>
          </section>
          <Link href={"demo/dashboard"}>
            <button className="btn btn-primary" disabled>
              Sign in to access demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
