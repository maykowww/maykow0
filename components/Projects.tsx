import { projects, type ProjectType } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="flex-row flex mb-5">
      <Image
        src={project.project_image}
        height={150}
        width={150}
        className="w-[150px] h-[150px]"
        alt={project.project_name}
      />
      <div className="p-3">
        <p className="text-white font-semibold text-xl">
          {project.project_name}
        </p>
        <p className="text-gray-500 text-[14px]">{project.description}</p>
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
      <div className=" container mx-auto 2xl  ">
        <div className="flex-row mt-7">
          {projects.map((project) => (
            <ProjectCard key={project.project_name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
