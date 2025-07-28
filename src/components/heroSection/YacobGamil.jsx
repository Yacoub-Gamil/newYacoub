import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function YacobGamil() {
  const yacoub = "Yacoub Gamil";
  const spanS = "<span>";
  const spanE = "</span>";
  const programmer =
    "A programmer who is constantly seeking new learning opportunities.";

  useGSAP(() => {
    gsap.fromTo(
      "#spanS",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        delay: 1,
        x: 0,
        stagger: 0.03,
        ease: "power3",
      }
    );
    gsap.fromTo(
      "#yacoub",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        delay: 2,
        x: 0,
        stagger: 0.08,
        ease: "power2",
      }
    );
    gsap.fromTo(
      "#spanE",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        delay: 2.5,
        x: 0,
        stagger: 0.03,
        ease: "power3",
      }
    );

    gsap.fromTo(
      "#programmer",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        delay: 3,
        x: 0,
        duration: 1,
        stagger: 0.01,
        ease: "power3",
      }
    );

    gsap.fromTo(
      "#frontend",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 0.5,
        x: 0,
      }
    );
    gsap.fromTo(
      "#development",
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 4.2,
        opacity: 1,
        duration: 0.5,
        scale: 1,
      }
    );
  }, []);

  return (
    <div className=" mt-[4rem] md:mt-[8rem]">
      <div className=" text-center mb-6">
        {spanS.split("").map((char, i) => (
          <span
            id="spanS"
            key={i}
            className="text-[#fa8484] font-serif text-[1rem]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}

        {yacoub.split("").map((char, i) => (
          <span
            id="yacoub"
            key={i}
            className=" text-6xl lg:text-8xl tracking-tighter font-semibold mr-2"
          >
            {char === "" ? "\u00A0" : char}
          </span>
        ))}

        {spanE.split("").map((char, i) => (
          <span
            id="spanE"
            key={i}
            className="text-[#fa8484] font-serif text-[1rem]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <div className=" text-center">
        {programmer.split("").map((char, i) => (
          <span id="programmer" key={i} className=" text-xl lg:text-4xl ">
            {char === "" ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <div className="text-2xl mt-8 md:text-4xl flex justify-center">
        <div id="frontend" className="">
          <span>Frontend</span>{" "}
          <span className=" text-[#fa8484] mr-1">web</span>
        </div>

        <div id="development" className="">
          <span className="text-green mr-1 font-serif">{"{"}</span>
          <span className=" font-serif">development</span>
          <span className=" text-green ml-1 font-serif">{"...}"}</span>
        </div>
      </div>
    </div>
  );
}

export default YacobGamil;
