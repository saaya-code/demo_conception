import { heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient } from "./design/SignInUp";
import { heroIcons } from "../constants";
import { useRef } from "react";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import { useState } from "react";
//import CompanyLogos from "./CompanyLogos";

const SignInUp = () => {
  const parallaxRef = useRef(null);
  const [signup, setSignup] = useState("signup");

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <p className="h6 text-n-10">{signup}</p>
              <div className=" h-[1.4rem] bg-n-10 rounded-t-[0.9rem]">
                <div className="flex justify-center">
                  {signup == "signup" ? <FormSignUp /> : <FormSignIn />}
                </div>
              </div>

              <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button
                  white
                  onClick={() => {
                    setSignup("signup");
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  onClick={() => {
                    setSignup("!signup");
                  }}
                >
                  Sign In
                </Button>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default SignInUp;
