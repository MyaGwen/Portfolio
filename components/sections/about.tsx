"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import AboutMe from "@/public/images/mee.png";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20" id="about">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I&apos;m{" "}
            <span className="text-foreground font-semibold">
              Wendy Edem Ahadome
            </span>
            , a Frontend Developer from Accra, Ghana. I love creating beautiful,
            user-focused digital experiences that merge design and
            functionality.
          </p>
          <p className="text-lg text-muted-foreground">
            With a passion for learning and a knack for problem-solving, I turn
            complex ideas into sleek, impactful web solutions. I aim to deliver
            seamless interfaces and optimized user experiences that make a
            difference.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={AboutMe}
            alt="About me"
            className="rounded-lg shadow-lg max-w-xs md:max-w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
