import { projects, type ProjectType } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OpacityCard } from "./opacity-card";

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link
    href={project.url}
    rel="noopener noreferrer"
    target="_blank"
    className="z-[1]"
  >
    <div className="flex flex-col gap-2 md:flex-row items-center mb-5">
      <Image
        src={project.project_image}
        height={150}
        width={150}
        className="w-[150px] h-[150px]"
        alt={project.project_name}
      />
      <div className="p-3 md:text-left text-center">
        <p className="text-white font-semibold text-2xl mb-2">
          {project.project_name}
        </p>
        <p className="text-gray-500 text-[16px]">{project.description}</p>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container flex flex-col gap-2 mx-auto">
        {projects.map((project) => (
          <OpacityCard key={project.project_name}>
            <ProjectCard project={project} /> 
          </OpacityCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
