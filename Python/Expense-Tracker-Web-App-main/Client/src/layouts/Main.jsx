// helper functions
import { fetchData } from "../helpers";

// react-router-dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";

// loader functions
export function mainLoader() {
  const userName = fetchData("userName"); // const userName = "John"
  return { userName }; // return { userName: "John" }
}

function Main() {
  const { userName } = useLoaderData(); // const { userName } = { userName: "John" }
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      {/* <Navbar userName={userName} /> */}
      <Nav userName={userName}/>
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave" />
    </div>
  );
}

export default Main;
