import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MenuNav from "./MenuNav";
import gsap from "gsap";
import { useRef } from "react";

function Header() {
  const headerRef = useRef(null);
  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      delay: 2,
      duration: 1,
      ease: "circ",
    });
  }, []);

  return (
    <div ref={headerRef} className=" text-white py-4 ">
      <div className="flex items-center justify-between max-w-[80%] mx-auto">
        <Logo />
        <MainNav />
        <MenuNav />
      </div>
    </div>
  );
}

export default Header;
