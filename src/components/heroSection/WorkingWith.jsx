import { FaCss3, FaHtml5, FaJs, FaNode } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SlSocialGithub } from "react-icons/sl";

function WorkingWith() {
  return (
    <div>
      <div className=" flex font-serif justify-center items-center mt-8 text-xl">
        <span className=" mr-1 opacity-50">{"{"}</span>
        <span>console</span>
        <span className=" text-[#fa8484]">{`.log`}</span>
        <span className="">{`("`}</span>
        <span className=" opacity-50 text-[0.8rem]">
          {/* <GiArrowDunk /> */}
          SMOOTHLY WORK WITH
        </span>
        <span className="">{`")`}</span>
        <span className=" ml-1 opacity-50">{"}"}</span>
      </div>
      <div className=" flex justify-center text-5xl">
        <div className=" flex flex-col items-center mt-2 gap-2 text-xl">
          <div className=" flex gap-4 text-4xl">
            <FaHtml5 className=" border border-secondary rounded-full p-1" />
            <FaCss3 className=" border border-secondary  rounded-full p-1" />
            <FaJs className=" border border-secondary  rounded-full p-1" />
            <FaReact className=" border border-secondary  rounded-full p-1" />
            <SiNextdotjs className=" border  border-secondary rounded-full p-1" />
            <RiTailwindCssFill className=" border border-secondary rounded-full p-1" />
          </div>
          <div className=" flex gap-4 text-4xl">
            <FaNode className=" border border-secondary rounded-full p-1" />

            <SiExpress className=" border  border-secondary rounded-full p-1" />
            <SiMongodb className=" border  border-secondary rounded-full p-1" />
          </div>
          <SlSocialGithub className=" text-2xl  border-secondary border-b" />
        </div>
      </div>
    </div>
  );
}

export default WorkingWith;
