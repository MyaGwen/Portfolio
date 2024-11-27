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
            Hello! I&apos;m{" "}
            <span className="text-foreground font-semibold">Wendy Edem Ahadome</span>,
            a passionate Frontend Developer who thrives on blending aesthetics
            with functionality. Based in Accra, Ghana, I specialize in crafting
            digital experiences that are not only visually stunning but also
            user-focused.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey into tech has been one of curiosity and continuous
            learning. With a keen eye for design and a deep understanding of
            modern technologies, I transform complex ideas into intuitive,
            accessible, and impactful web solutions.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether it&apos;s building seamless interfaces, optimizing user
            experiences, or collaborating with teams to solve problems
            creatively, I&apos;m driven by the opportunity to make a meaningful
            impact in the digital world.
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
