import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MenuNav from "./MenuNav";
import gsap from "gsap";

function Header() {
  useGSAP(() => {
    gsap.from("#header", {
      opacity: 0,
      delay: 5,
      duration: 0.8,
      y: -40,
      ease: "power.in",
    });
  }, []);
  return (
    <div id="header" className=" h-[15vh] text-white py-6">
      <div className="flex items-center justify-between">
        <Logo />
        <MainNav />
        <MenuNav />
      </div>
    </div>
  );
}

export default Header;
