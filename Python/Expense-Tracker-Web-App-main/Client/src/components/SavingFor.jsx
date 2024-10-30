import { Home } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { Wine } from "lucide-react";
import { Car } from "lucide-react";
import { BookCopy } from "lucide-react";
import { Plane } from "lucide-react";
// import "../index.css";

const SavingFor = () => {
  return (
    <div className="h-screen">
      <h1 className="pt-10 text-2xl text-center text-black w-[50%] mx-auto">
        What are you saving for ?
      </h1>
      <img
        src="/img/savebox.png"
        className="mx-auto"
        width={100}
        height={100}
      />
      <ul>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <Plane />
          Travel
        </li>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <Home />
          Buy a House
        </li>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <Car />
          Buy a Car
        </li>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <Wine />
          Wedding
        </li>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <BookCopy />
          Education
        </li>
        <li className="rounded-full font-semibold text-lg px-5 p-2.5 shadow-md m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
          <PlusCircle />
          Other
        </li>
      </ul>
    </div>
  );
};

export default SavingFor;
