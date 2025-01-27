"use client";
import React, { useEffect } from "react";
import { socialIcons } from "@/constant/social-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <p className="text-gray-300 text-center text-sm">
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
