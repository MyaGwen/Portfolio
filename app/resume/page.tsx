"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon, BookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2022 - Present",
    description:
      "Led the development of multiple high-impact web applications.",
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions",
    period: "2020 - 2022",
    description:
      "Developed and maintained client websites using modern technologies.",
  },
  // Add more experience...
];

const education = [
  {
    degree: "Bachelor's in Political Science",
    school: "University of Ghana",
    period: "2016 - 2020",
  },
  // Add more education...
];

const certifications = [
  {
    degree: "Bachelor's in Political Science",
    school: "University of Ghana",
    period: "2016 - 2020",
  },
  // Add more education...
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Git",
  "REST APIs",
  "GraphQL",
  "Responsive Design",
];

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground">
            My professional journey and skills
          </p>
        </motion.div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BriefcaseIcon className="w-6 h-6 mr-2" />
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">
                        {item.company} • {item.period}
                      </p>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookIcon className="w-6 h-6 mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">
                        {item.school} • {item.period}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCapIcon className="w-6 h-6 mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="flex flex-col gap-6 p-6">
                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">
                        {item.school} • {item.period}
                      </p>
                      <Button className="mr-auto px-8 rounded-full">View Certificate</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-base py-2 px-4 hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
