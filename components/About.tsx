import React from "react";

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
        <p className="text-gray-300 text-center ">
          Hey there! I’m a full-stack developer driven by a passion for turning
          ideas into amazing digital experiences. My journey is fueled by clean
          code, jaw-dropping animations, and solutions that truly make an
          impact. On the frontend, I craft modern and interactive interfaces
          using React.js and Next.js – whether it’s a sleek animated menu or an
          immersive 3D experience powered by Three.js. On the backend, I dive
          deep with Node.js and Golang to build scalable, high-performance
          systems that push the limits of innovation. I also love bringing apps
          to life with Flutter, ensuring every pixel is in the right place,
          every transition is smooth, and data flows seamlessly through GraphQL
          or REST APIs. From futuristic websites to fully-fledged data
          management systems, I’ve worked on projects that deliver results and
          exceed expectations. Need something innovative, practical, and built
          to impress? Let’s create something amazing together! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
