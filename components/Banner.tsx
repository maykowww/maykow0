"use client";

import React from "react";
import Image from "next/image";
import { OpacityCard } from "./opacity-card";
import Link from "next/link";
import { socialIcons } from "@/constant/social-icons";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col gap-5 justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Ibrahim Memon"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Maykow Victor
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-white to-rose-400">
              Chill
            </span>
          </p>
          <Image
            src="/popcorn.gif"
            height={50}
            width={50}
            alt="Ibrahim Memon"
          />
        </div>
        <OpacityCard>
          <p className="text-md text-gray-200 my-8 max-w-[600px]">
            Passionate Software Developer with knowledge in web and mobile
            development, dedicated to crafting elegant and user-friendly mobile
            and web applications.
          </p>
        </OpacityCard>
        <div className="flex w-full justify-center mt-4">
          {socialIcons.map((social) => {
            return (
              <Link
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                key={social.alt}
                className="z-[1]"
              >
                <Image
                  src={social.image}
                  height={30}
                  width={30}
                  alt={social.alt}
                  sizes="100vw"
                  className="mx-5"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
