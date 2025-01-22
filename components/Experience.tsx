import Image from "next/image";
import React from "react";
import { experiences, type ExperienceType } from "@/constant/experiences";

type ExperienceCardProps = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className=" container mx-auto 2xl ">
      <div className="md:flex md:flex-row md:justify-between pt-5">
        <div className="flex items-center gap-3">
          <Image
            src={experience.company_icon}
            height={30}
            width={30}
            alt={experience.company_name}
          />
          <p className="text-gray-300 ">
            <span className="font-semibold">{experience.company_name} / </span>
            {experience.role}
          </p>
        </div>
        <p className="text-gray-300 md:pt-0 pt-3">
          {experience.date_start} - {experience.date_end} &nbsp; | &nbsp; {experience.company_location}
        </p>
      </div>

      <p className="text-gray-300 pt-5">{experience.description}</p>
      <div className="flex flex-wrap">
        {experience.technologies.map((tech) => (
          <div
            key={tech}
            className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company_name}
            experience={experience}
          />
        ))} 
      </div>
    </section>
  );
};

export default Experience;
