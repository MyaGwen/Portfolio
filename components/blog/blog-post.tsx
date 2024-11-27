"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import { posts } from "@/lib/blog-data";

export default function BlogPost({ id }: { id: string }) {
  const post = posts[id as keyof typeof posts];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between mb-8">
            <div className="text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
            {/* <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Introduction</h2>
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
            </CardContent> */}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
