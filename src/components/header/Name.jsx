import { useEffect, useRef } from "react";
import gsap from "gsap";

const WriteName = ({ name = "Gojo Satoru" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }
  }, [name]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        ref={containerRef}
        className="flex gap-[0.1em] text-white text-4xl md:text-6xl font-mono"
      >
        {name.split("").map((char, i) => (
          <span key={i} className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WriteName;
