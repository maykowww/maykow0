import React from "react";
import { OpacityCard } from "./opacity-card";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-white to-rose-400  text-1xl">
          EXPLORE NOW
        </p>
        <OpacityCard>
          <p className="text-gray-300 text-center ">
            I’m a full-stack developer passionate about turning ideas into
            impactful digital experiences. I craft modern, interactive
            interfaces with React.js, Next.js, and Three.js, and build scalable
            backends with Node.js and Golang. I also bring apps to life with
            Flutter, ensuring smooth transitions and seamless data flow through
            GraphQL or REST APIs. From immersive websites to robust data
            systems, I deliver innovative solutions that exceed expectations.
            Let’s build something amazing! 🚀
          </p>
        </OpacityCard>
      </div>
    </section>
  );
};

export default About;
