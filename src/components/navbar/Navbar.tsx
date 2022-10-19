import Link from "next/link";
import React from "react";
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import LoginBtn from "../login-btn/LoginBtn";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 z-50 bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-56 bg-primary p-2 font-semibold text-primary-content shadow"
          >
            <li>
              <a>
                <HiOutlineUserAdd />
                Mange Roles
              </a>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/[teamid]/tickets/",
                  query: { teamid: "demo" },
                }}
              >
                <a>
                  <BiTask />
                  Tickets
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={{
            pathname: "/[teamid]/dashboard",
            query: { teamid: "demo" },
          }}
        >
          <a className="text-xl font-semibold normal-case">Dashboard</a>
        </Link>
      </div>
      <div className="navbar-end">
        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
