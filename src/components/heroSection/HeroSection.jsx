import YacobGamil from "./YacobGamil";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.from("#divS", {
      opacity: 0,
      duration: 0.5,
      x: -60,
      ease: "power1.in",
    });

    gsap.fromTo(
      "#br",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        delay: 3.5,
        y: 0,
        duration: 1,
        ease: "bounce",
      }
    );

    gsap.from("#divE", {
      opacity: 0,
      duration: 0.5,
      delay: 4,
      x: 40,
      ease: "power1.in",
    });
  }, []);

  return (
    <section className=" flex justify-center h-[80vh] relative">
      <div
        id="divS"
        className=" absolute top-[2rem] left-40 font-serif text-[#fa8484] hidden lg:block text-[3.5rem]"
      >
        {"<div>"}
      </div>
      <div className=" w-full text-white ">
        <div className=" flex flex-col items-center">
          {/* Hero Title  */}
          <YacobGamil />

          <div id="br" className=" text-center mt-3 text-xl lg:mt-8">
            <span className="text-[#fa8484] font-serif  text-[1rem]">
              {"<br />"}
            </span>
          </div>
        </div>
      </div>

      <div
        id="divE"
        className=" bottom-[6rem] font-serif right-40 absolute text-[#fa8484] hidden lg:block text-[3.5rem]"
      >
        {"</div>"}
      </div>
    </section>
  );
}

export default HeroSection;
