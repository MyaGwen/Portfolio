"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies, projectCategories } from "@/lib/data";
import Image from "next/image";

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((project) =>
          project.categories.includes(activeCategory)
        );

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
            Dive into the details of real-world projects and their impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {projectCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`py-2 px-4 text-sm text-base rounded-lg ${
                activeCategory === category
                  ? "bg-primary"
                  : "bg-muted text-foreground"
              } hover:scale-105 transition-transform`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/case-studies/${project.slug}`}>
                <Card className="h-full hover:shadow-lg transition-transform duration-300 group">
                  <CardHeader>
                    <Image
                      src={project.image}
                      width={800}
                      height={400}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-bold mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4">
                      {project.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
