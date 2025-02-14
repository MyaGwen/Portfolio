"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

const experience = [
  {
    title: "Frontend Engineer",
    company: "Huvacliq Technologies",
    period: "July 2023 – Present",
    description: [
      "Developed and maintained interactive, responsive web applications using Next.js, React, and WordPress, ensuring optimal performance and user experience.",
      "Enhanced website load times by 40% through asset optimization, lazy loading, and performance best practices.",
      "Built and integrated custom APIs and authentication systems, improving security and accessibility.",
      "Ensured cross-browser compatibility and mobile responsiveness for a seamless user experience.",
      "Automated content updates using CMS integrations, enhancing site management efficiency.",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Stutern (Remote)",
    period: "May 2023 – September 2023",
    description: [
      "Constructed UI components and pages including the landing, authentication, blog, and dashboard in alignment with the design library documented on Figma.",
      "Implemented robust user authentication features in a loan web app, reducing login errors by 30% and enhancing overall user satisfaction.",
      "Integrated APIs to fetch and display real-time data, improving user experience and accessibility.",
      "Partnered with a cross-functional team to deliver multiple features and enhancements, leading to a 40% improvement in user engagement.",
    ],
  },
  {
    title: "WordPress Designer Intern",
    company: "Huvacliq Technologies",
    period: "Oct 2020 - January 2022",
    description: [
      "Designed and customized WordPress websites, implementing custom themes and plugins.",
      "Enhanced SEO performance and site speed using caching, image optimization, and best coding practices.",
      "Provided technical support and maintenance, ensuring long-term website functionality.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Arts in Political Science",
    school: "University of Ghana, Legon",
    period: "September 2016 - July 2020",
    major: "Political Science and Information Studies",
  },
  {
    degree: "Certificate in Frontend Engineering (Bootcamp)",
    school: "Stutern (Remote)",
    period: "September 2022 - September 2023",
  },
  {
    degree: "Certified AWS Cloud Practitioner",
    school: "Amalitech Ghana",
    period: "June 2024",
  },
];

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Supabase",
  "Firebase",
  "AWS Services",
  "Git Version Control",
  "REST APIs",
  "UI/UX Design",
  "Performance Optimization",
  "Responsive Web Design",
  "Problem-solving",
  "Teamwork",
  "Communication",
  "Attention to Detail",
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
                    <p>
                      {ref.position} at {ref.company}
                    </p>
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
