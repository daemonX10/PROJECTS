// react-router-dom imports
import { Form } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import mainImg from "../assets/Home/main-img.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="inner-hero">
        <h1>
          Track Your Expenses With<br />
          <span> Financify</span>
        </h1>
        <p>
          Personal budgeting and expense tracking made simple.
          <br />
          Start your journey to financial wellness today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            aria-label="Your Name"
            autoComplete="given-name"
            required
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="bg-[#00b386]">
            <span>Get Started</span>
            <UserPlusIcon width={20} height={20} />
          </button>
        </Form>
      </div>
      <img src={mainImg} alt="hero" width={450} />
    </div>
  );
}

export default Hero;
