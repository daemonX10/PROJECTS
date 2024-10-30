import { Plane } from "lucide-react";
// import "../index.css";

const SavingWhen = () => {
  return (
    <div className="py-6">
      <div className="rounded-full shadow-md px-5 p-3 mx-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
        <Plane />
        Travel
      </div>
      <h1 className="pt-10 text-2xl text-center text-black w-[80%] mx-auto">
        When will you Travel ?
      </h1>
      <img
        src="/img/calendar.png"
        className="mx-auto"
        width={100}
        height={100}
      />

      <div inline-datepicker data-date="02/25/2022"></div>
      <button className="rounded-full shadow-md px-16 text-center p-3 m-3 bg-transparent text-black border-2 border-black">
        Next
      </button>

      <div className="rounded-full shadow-md px-5 p-3 m-3 bg-transparent flex flex-row gap-3 text-black border-2 border-black">
        <Plane />
        Travel
      </div>
      <h1 className="pt-10 text-2xl text-center text-black w-[60%] mx-auto">
        How much Money do you need ?
      </h1>
      <img
        src="/img/moneybag.png"
        className="mx-auto"
        width={100}
        height={100}
      />
      <label className="w-full">Current Cost </label>
      <input className="rounded-full shadow-md px-5 p-3 m-3 bg-transparent text-black border-2 border-black" />
      <button className="rounded-full justify-end shadow-md px-16 p-3 m-3 bg-transparent text-black border-2 border-black">
        Next
      </button>
    </div>
  );
};

export default SavingWhen;
