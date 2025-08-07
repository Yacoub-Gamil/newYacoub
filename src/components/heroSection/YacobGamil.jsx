import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function YacobGamil() {
  useGSAP(() => {
    gsap.from("#yacoub", {
      opacity: 0,
      duration: 0.5,
      delay: 1.8,
      ease: "bounce.in",
    });
    gsap.from("#forntend", {
      opacity: 0,
      delay: 2,
      duration: 0.5,
      ease: "power1.in",
    });
    gsap.from("#programmer", {
      opacity: 0,
      delay: 2.2,
      duration: 0.5,
      ease: "power1.in",
    });
  }, []);
  return (
    <div className=" text-white mt-[3rem] md:mt-[8rem] text-center ">
      <h1
        id="yacoub"
        className=" text-7xl md:text-8xl font-semibold  capitalize"
      >
        yacoub gamil
      </h1>
      <h2 id="forntend" className=" mt-4 capitalize text-[1rem] font-semibold">
        Frontend web {"{ "}
        <span className=" font-serif text-green">development</span>
        {" }"}
      </h2>
      <h3
        id="programmer"
        className=" text-xl md:text-3xl capitalize mt-2 md:mt-10"
      >
        A programmer who is constantly <br />{" "}
        <span className=" md:text-5xl">
          seeking new learning opportunities.
        </span>
      </h3>
    </div>
  );
}

export default YacobGamil;
