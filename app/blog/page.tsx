"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: "future-of-frontend",
    title: "The Future of Frontend Development",
    description: "Exploring upcoming trends and technologies in frontend development for 2024 and beyond.",
    date: "March 15, 2024",
    readTime: "5 min read",
    categories: ["Technology", "Web Development"], // Multiple categories
    tags: ["Frontend", "Web Development", "Trends"],
  },
  {
    id: "react-performance",
    title: "Mastering React Performance",
    description: "Essential techniques and best practices for optimizing React applications.",
    date: "March 10, 2024",
    readTime: "8 min read",
    categories: ["React", "JavaScript"], // Multiple categories
    tags: ["React", "Performance", "JavaScript"],
  },
];

const categories = ["All", "Technology", "React", "JavaScript", "CSS", "Career"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on multiple categories
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.categories.includes(activeCategory));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts and insights about web development
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

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="mb-2">{post.title}</CardTitle>
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
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
