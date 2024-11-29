"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  const { slug } = useParams();
  const project = caseStudies.find((post) => post.slug === slug);
  const router = useRouter();

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          onClick={() => router.back()}
          className="inline-flex items-center bg-0 hover:bg-0 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
