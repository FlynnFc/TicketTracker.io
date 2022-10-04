import React from "react";
import Image from "next/image";
import testerImage from "../../images/tester.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          height={400}
          width={200}
          alt="unsplashimg"
          src={testerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Tickettracker.io</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href={"/dashboard"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
