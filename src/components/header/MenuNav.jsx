import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const links = [
  { name: "home", href: "/home" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (isOpen) {
      gsap.to("#menu", {
        opacity: 1,
        width: "95vw",
        display: "block",
      });
    } else {
      gsap.to("#menu", {
        opacity: 0,
        width: 0,
      });
    }
    if (isOpen) {
      gsap.from("#link", {
        opacity: 0,
        delay: 1,
        x: 40,
        duration: 0.3,
        stagger: 0.2,
      });
    }
    if (!open) {
      gsap.from("#link", {
        opacity: 0,
        x: 0,
        duration: 0.4,
        stagger: 0.2,
      });
    }
  }, [isOpen]);

  return (
    <div className=" md:hidden ">
      <div
        onClick={() => setIsOpen((open) => !open)}
        className=" text-3xl cursor-pointer"
      >
        <CiMenuKebab
          className={`${isOpen && "-rotate-90"} -rotate-0 duration-300`}
        />
      </div>

      <nav
        id="menu"
        className={`absolute bg-[#212529] h-[65vh] hidden z-50  shadow-[0px_0px_1px_0px_gray] rounded-2xl left-1/2 -translate-x-1/2 top-[7rem] `}
      >
        <div className=" flex h-full w-full justify-center items-center">
          <div className=" flex flex-col gap-8 opacity-100 items-center text-4xl">
            {links.map((link) => (
              <a id="link" key={link.href} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuNav;
