// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Success from "./Success";


function ContactForm() {
  const [state, handleSubmit] = useForm("mkgkwpek");
  if (state.succeeded) {
    return <Success></Success>;
  }
  return (
    <section className=" bg-cover p-6 scroll-mt-20 my-auto justify-center dark:bg-black">
      <div className="text-center dark:text-white py-5">
        <h1 className="text-[12px] sm:text-2xl md:text-2xl lg:text-4xl font-thin dark:text-green-500">
          Contact us today
        </h1>
        <p>
          We install high-efficiency monocrystalline and polycrystalline solar
          panel from the top global brands.
        </p>
      </div>
      <div className=" grid sm:flex mx-20 max-sm:mx-0  md:grid lg:flex gap-10 text-center rounded-xl p-8 dark:bg-green-900 justify-center">
        <div className="">
          <h1 className=" text-2xl max-sm:text-2xl font-bold text-left">
            Send Us a Message Today
          </h1>{" "}
          <form onSubmit={handleSubmit}>
            {" "}
            <center>
              <div className="grid gap-8 max-md:grid max-sm:justify-center p-7">
                <input
                  type="text"
                  name="FirstName"
                  id="first-name"
                  placeholder="First Name"
                  className="p-1 border bg-green-50 border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg  placeholder:text-black placeholder:text-[15px]"
                />
                <input
                  type="text"
                  name="LastName"
                  id="last-name"
                  placeholder="Last Name"
                  className="p-1 border bg-green-50 border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg placeholder:text-black placeholder:text-[15px]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-1 border bg-green-50 border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg placeholder:text-black placeholder:text-[15px]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                  className="p-1 border bg-green-50 border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg placeholder:text-black placeholder:text-[15px]"
                />
                <ValidationError
                  prefix="Number"
                  field="number"
                  errors={state.errors}
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Installation Address"
                  className="p-1 border bg-green-50 border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg placeholder:text-black placeholder:text-[15px]"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="  Send Us a Message"
                  className="border border-solid w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] h-[5rem] placeholder:text-black placeholder:text-[15px] "
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-1 border border-black w-[14rem] sm:w-[5rem] md:w-[13rem] lg:w-[25rem] rounded-lg bg-green-500 max-sm:w-[10rem] placeholder:text-[15px] placeholder:text-black"
                >
                  SEND
                </button>{" "}
              </div>
            </center>
          </form>
        </div>
        
      </div>
    </section>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
