import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3, SiExpress, SiTypeorm } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaGithubSquare, FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SlSocialGithub } from "react-icons/sl";
import { useGSAP } from "@gsap/react";

const skills = [
  { name: "HTML", icon: <IoLogoHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Javascript", icon: <RiJavascriptFill /> },
  { name: "Typescript", icon: <BiLogoTypescript /> },
  { name: "React", icon: <IoLogoReact /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "TypeORM", icon: <SiTypeorm /> },
  { name: "Git", icon: <SlSocialGithub /> },
  { name: "GitHub", icon: <FaGithubSquare /> },
];

function ExperiencedIn() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#work", {
      scrollTrigger: {
        trigger: "#work",
        start: "20% 90%",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
      opacity: 0,
      ease: "circ.in",
      y: 20,
      duration: 0.4,
    });

    gsap.from("#skill", {
      scrollTrigger: {
        trigger: "#skill",
        start: "20% 90%",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
      opacity: 0,
      ease: "bounce.inOut",
      stagger: 0.1,
      grid: [2, 4],
      y: 20,
      duration: 0.4,
    });
  }, []);

  return (
    <section className="w-full h-screen text-white relative ">
      <div className="">
        <div
          id="work"
          className=" flex justify-center items-center ga-2md:gap-4"
        >
          <span className=" text-light-red font-sans">{" <h1>"}</span>
          <h1 className=" text-2xl md:text-4xl lg:text-5xl mr-1 mb-8">
            {" "}
            I work smoothly with{" "}
          </h1>
          <span className=" text-light-red font-sans"> {"</h1>"}</span>
        </div>

        <div
          id="conSkill"
          className=" mx-auto font-serif font-semibold mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
        >
          {skills.map((skill) => (
            <div
              id="skill"
              key={skill.name}
              className=" rounded-2xl shadow-[0px_0px_5px_0px_white] py-2 px-4 flex items-center gap-4 justify-between last:justify-center last:col-span-2 md:last:col-span-4"
            >
              <span>{skill.name}</span>
              <span className=" text-2xl">{skill.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencedIn;
