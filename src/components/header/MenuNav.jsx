import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const links = [
  { name: "home", href: "/home" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linksRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (isOpen) {
      tl.set(menuRef.current, { display: "block" })
        .to(menuRef.current, {
          opacity: 1,
          width: "98vw",
          duration: 0.3,
          ease: "circ.in",
        })
        .from(linksRef.current, {
          opacity: 0,
          x: 40,
          duration: 0.4,
          stagger: 0.15,
          ease: "circ.in",
        });
    } else {
      tl.to(menuRef.current, { opacity: 0, width: 0, duration: 0.3 }).set(
        menuRef.current,
        { display: "none", ease: "circ.in" }
      );
    }
  }, [isOpen]);

  return (
    <div className="md:hidden rounded-full p-1 z-50">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl cursor-pointer"
      >
        <CiMenuKebab
          className={`${isOpen ? "-rotate-90" : "-rotate-0"} duration-300`}
        />
      </div>

      <nav
        ref={menuRef}
        className=" absolute p-8 top-[8rem] left-1/2 -translate-x-1/2 bg-primary shadow-2xl rounded-2xl"
      >
        <div className="flex h-full w-full justify-center items-center">
          <div className="flex flex-col gap-8 items-center text-4xl">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
              >
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
