function About() {
  return (
    <section className=" text-white mt-[4rem]">
      <div>
        <img
          src="about-img.png"
          alt=""
          className=" absolute w-[10rem] md:w-[20rem] right-12 opacity-5 z-0"
        />
      </div>
      <div className="">
        <div>
          <h1 className=" capitalize md:text-4xl mb-2">
            <span className=" text-xl">01.</span>about{" "}
            <span className=" text-red">Me</span>
          </h1>
          <p className=" font-sans text-[0.8rem] md:text-[1rem] mx-4 md:mx-[4rem]">
            I'm a budding frontend web developer with a strong passion for
            crafting visually appealing and user-friendly websites. Recently
            diving into HTML, CSS, and JavaScript, React, Next.js, I'm excited
            to learn more about responsive design and modern frameworks. I
            thrive on turning ideas into interactive experiences and enjoy
            solving problems through code. With a keen eye for detail and a
            desire to keep improving, I'm ready to embrace new challenges and
            collaborate on innovative projects in the web development world.
          </p>
        </div>

        <div className=" mt-8">
          <h1 className=" capitalize md:text-4xl mb-2">
            <span className=" text-xl">02.</span>EXPER
            <span className=" text-red">TISE</span>
          </h1>
          <p className=" font-sans text-[0.8rem] md:text-[1em] mx-4 md:mx-[4rem]">
            I am constantly seeking to improve my skills and stay up-to-date
            with the latest technologies. I am eager to take on new challenges
            and use my expertise to contribute to successful projects.
          </p>
        </div>

        <div className=" mt-4 md:mt-[2rem] grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div className=" flex flex-col justify-center items-center p-2 shadow-[0px_0px_1px_0px] rounded-2xl ">
            <img src="/softwear.png" alt="" className="w-[15rem]" />
            <h1 className=" text-xl font-semibold mt-2 mb-2">
              Software Development
            </h1>
            <p className=" font-serif text-center opacity-80">
              I'm interested in software engineering in general, I love learning
              about algorthims, data structures, and design patterns. It's my
              way to express my creativity. Some people create music, movies,
              paintings or pottery. I create software.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center p-2 shadow-[0px_0px_1px_0px] rounded-2xl ">
            <img src="/frontend.png" alt="" className="w-[15rem]" />
            <h1 className=" text-xl font-semibold mt-2 mb-2">
              Frontend Development
            </h1>
            <p className=" font-serif text-center opacity-80">
              Proficient in developing modern frontend applications using React,
              and Next.js. Skilled in HTML, CSS, and Tailwind for building
              responsive user interfaces. Committed to delivering high-quality
              and user-friendly web experiences.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center p-2 shadow-[0px_0px_1px_0px] rounded-2xl ">
            <img src="/backend.png" alt="" className="w-[15rem]" />
            <h1 className="text-xl font-semibold mt-2 mb-2">
              Backend Development
            </h1>
            <p className=" font-serif text-center opacity-80 ">
              Experienced in building and maintaining efficient backend systems
              using a variety of technologies such as Express, MySQL,
              TypeORM,Framework, TypeScript, Proficient in designing and
              implementing RESTful APIs and integrating with frontend
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
