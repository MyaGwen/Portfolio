"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

const experience = [
  {
    title: "Frontend Engineer",
    company: "Huvacliq Technologies",
    period: "July 2023 – Present",
    description: [
      "Developed and customized responsive websites using WordPress, React, and Next.js.",
      "Implemented plugins, APIs, and custom code for enhanced dynamic and interactive user experiences.",
      "Collaborated with UX/UI designers to create visually appealing web pages from design mockups.",
      "Optimized websites for speed and performance using techniques like code minification and image optimization.",
      "Maintained and updated websites, troubleshooting issues and applying security updates.",
      "Integrated CMS and third-party services for efficient content updates.",
      "Tested and debugged websites for consistency across browsers and devices.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Stutern (Remote)",
    period: "May 2023 – September 2023",
    description: [
      "Constructed UI components and pages, including landing, authentication, blog, and dashboard.",
      "Integrated data and APIs to fetch and display information on the frontend.",
      "Collaborated with the design team to understand and implement project requirements.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Huvacliq Technologies",
    period: "October 2018 – December 2022",
    description: [
      "Designed and developed custom WordPress themes and plugins.",
      "Enhanced site performance and SEO using strategies like caching and code minification.",
      "Worked closely with clients to gather requirements and provide ongoing technical support.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Arts in Political Science",
    school: "University of Ghana, Legon",
    period: "September 2016 – July 2020",
    major: "Political Science and Information Studies",
  },
  {
    degree: "Certificate in Frontend Engineering (Bootcamp)",
    school: "Stutern (Remote)",
    period: "September 2022 – September 2023",
  },
  {
    degree: "AWS Cloud Practicioner",
    school: "Amalitech Ghana",
    period: "June 2023",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  'AWS Services',
  "WordPress",
  "Git Version Control",
  "Responsive Design",
  "REST APIs",
];

const references = [
  {
    name: "Kingsley David Gyimah",
    company: "Nextiva",
    position: "Senior Frontend Engineer",
    email: "david.gyimah@nextiva.com",
  },
  {
    name: "Felix Yeboah",
    company: "Primer Inc.",
    position: "Frontend Engineer",
    phone: "+16572058198",
  },
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
          {/* Experience Section */}
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
                      <ul className="list-disc pl-6 space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCapIcon className="w-6 h-6 mr-2" />
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
                      {item.major && <p>Major: {item.major}</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
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

          {/* References Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">References</h2>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{ref.name}</h3>
                    <p>{ref.position} at {ref.company}</p>
                    {ref.email && <p>Email: {ref.email}</p>}
                    {ref.phone && <p>Phone: {ref.phone}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
