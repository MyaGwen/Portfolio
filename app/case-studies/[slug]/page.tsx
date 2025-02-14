"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Back from "@/components/Back";

export default function CaseStudies() {
  const { slug } = useParams();
  const project = caseStudies.find((post) => post.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Back />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Problem</h2>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Solution</h2>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Impact</h2>
                  <p>{project.impact}</p>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="rounded-full bg-white px-6 py-1 flex items-center text-black"
                  >
                    Visit website
                    <ExternalLinkIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
