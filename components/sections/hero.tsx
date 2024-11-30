"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, GraduationCapIcon } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("case-studies");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="images/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 py-1 md:px-16 flex flex-col gap-8 container">
        <div className="flex flex-col gap-4 justify-start max-w-4xl text-white">
          <h1 className="font-semibold capitalize text-3xl md:text-6xl lg:text-7xl">
            Frontend Developer.
          </h1>
          <p className="text-2xl md:text-5xl lg:text-6xl">
            I build beautiful, accessible and responsive interfaces.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group rounded-full"
          >
            View My Work
            <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group rounded-full"
            onClick={() => (window.location.href = "/resume")}
          >
            My Resume
            <GraduationCapIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
