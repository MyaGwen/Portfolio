import React from "react";
import SectionDivider from "../Components/SectionDivider";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        marginBottom: "auto",
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex justify-start items-center h-[calc(100vh-60px)] hero section-padding"
      id="home"
    >
      <div className="my-auto">
        <div className="hero-content flex flex-col gap-2  py-4">
          <SectionDivider />
          <div className="ml-3">
            <h1 className="font-semibold  max-w-4xl">
              <span className="gradient-text capitalize text-3xl md:text-6xl lg:text-7xl">
                Frontend Developer. <br />
              </span>{" "}
              <span className="text-2xl md:text-5xl lg:text-6xl">
                I build beautiful, functional and responsive interfaces.
              </span>
            </h1>
            <button
              className="mt-6 text-lg font-semibold py-1 px-4 download"
              type="button"
            >
              <Link href="/Wendy'sCV.pdf" target="_blank" download={true}>
                Download Resume
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
