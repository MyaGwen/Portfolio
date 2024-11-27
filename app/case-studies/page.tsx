"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe.",
    date: "April 10, 2024",
    categories: ["E-commerce", "Web Development"],
    tags: ["Next.js", "Stripe", "TailwindCSS"],
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    description: "An intuitive dashboard for healthcare professionals.",
    date: "April 5, 2024",
    categories: ["Healthcare", "Analytics"],
    tags: ["React", "TypeScript", "D3.js"],
  },
];

const categories = ["All", "E-commerce", "Healthcare", "Analytics", "Web Development"];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Real-world projects and their impacts.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Badge
                variant={activeCategory === category ? "default" : "secondary"}
                className={`text-base py-2 px-4 cursor-pointer ${
                  activeCategory === category ? "bg-primary" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link href={`/case-studies/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                      <span>{project.date}</span>
                    </div>
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
