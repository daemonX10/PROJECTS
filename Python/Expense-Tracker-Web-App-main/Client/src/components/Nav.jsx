import React, { useState } from "react";
import { menu, close } from "../assets";
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

export default function Nav({ userName }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="relative flex justify-between items-center w-full mt-6">
      <NavLink
        className="z-40 flex items-center gap-3 pl-8"
        to="/"
        aria-label="home"
      >
        <img src={logomark} alt="logomark" width={40} />
        <span className="text-3xl">Financify</span>
      </NavLink>
      {/* <a className="z-40" href="/">
        <img className="pl-5 w-40 mt-2" src="/wewomenlogo.png" alt="logo" />
      </a> */}
      <div className="hidden lg:flex px-10 gap-[3rem] text-[#6F6F6F] text-base font-normal items-center">
        <a href="/">Home</a>
        {/* <a href="/about">About</a> */}
        <a href="/contact">Contact</a>
        <a href="/goal">Goals</a>
      </div>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <a href="/dashboard">
          <button className="px-[21px] py-[16px] rounded-2xl border-2 border-solid border-black bg-black text-white hover:bg-white hover:text-black">
            Dashboard
          </button>
        </a>
        {/* <a href="/login">
          <button className="px-8 py-2 rounded-2xl border-[1px] border-solid border-black">
            Log in
          </button>
        </a> */}
        {userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete User and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="navBtn bg-[#00b386]">
              <span>Delete User</span>
              <TrashIcon width={20} height={20} />
            </button>
          </Form>
        )}
      </div>
      <div className="lg:hidden z-40" onClick={handleClick}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-5 cursor-pointer"
        />
      </div>
      <ul
        className={
          toggle
            ? "pt-24 pb-8 absolute top-0 bg-white shadow-sm z-20 w-full px-8 lg:hidden flex flex-col items-center gap-5"
            : "hidden"
        }
      >
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li>
          <a href="/about">About</a>
        </li> */}
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/goal">Goals</a>
        </li>
        <div className="flex flex-col gap-5 my-2">
          <a href="/dashboard">
            <button className="w-full px-[21px] py-[16px] rounded-2xl border-2 border-solid border-black bg-black text-white hover:bg-white hover:text-black">
              Dashboard
            </button>
          </a>
          {/* <a href="/login">
            <button className="w-full px-6 py-1.5 rounded-3xl border-2 border-solid border-black">
              Log in
            </button>
          </a> */}
          {userName && (
            <Form
              method="post"
              action="logout"
              onSubmit={(event) => {
                if (!confirm("Delete User and all data?")) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit" className="navBtn bg-[#00b386]">
                <span>Delete User</span>
                <TrashIcon width={20} height={20} />
              </button>
            </Form>
          )}
        </div>
      </ul>
    </div>
  );
}
