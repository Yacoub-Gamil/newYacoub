import { useGSAP } from "@gsap/react";
import Header from "./components/header/Header";
import gsap from "gsap";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/About";
import ExperiencedIn from "./components/ExperiencedIn";

function App() {
  useGSAP(() => {
    gsap.to("#up", {
      height: "0vh",
      delay: 0.5,
      duration: 1.5,
      ease: "bounce",
    });
    gsap.to("#down", {
      height: "0vh",
      delay: 0.5,
      duration: 1.5,
      ease: "bounce",
    });
  }, []);

  return (
    <>
      <div className=" fixed w-full h-screen bg-[url('/zeller.jpg')] opacity-4  z-0 " />
      <div id="up" className=" absolute bg-primary w-full h-[50vh] z-[9999]" />

      <header className=" sticky z-0 top-0">
        <Header />
      </header>

      <main className=" relative flex flex-col items-center">
        <div className=" fixed z-0">
          <HeroSection />
        </div>
        <div className="h-screen md:h-screen" />

        <div className=" bg-primary relative w-full z-10">
          <div className=" max-w-[80%] mx-auto">
            <About />
            <ExperiencedIn />
          </div>
        </div>
      </main>
      <div
        id="down"
        className=" bg-primary absolute w-full h-[50vh] bottom-0 z-[9999]"
      />
    </>
  );
}

export default App;
