"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { blogCategories, blogPosts } from "@/lib/data";
import Image from "next/image";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on multiple categories
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(activeCategory));

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
          {blogCategories.map((category, index) => (
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
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className=""
              >
                <Link
                  href={`blog/${post.slug}`}
                  className="relative w-full h-96 overflow-hidden rounded-lg flex flex-col"
                >
                  <Image
                    src={post.image}
                    // src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="relative z-10 p-4 bg-black/70 text-white flex flex-col gap-3 rounded-b-lg mt-auto">
                    <div className="flex justify-between items-center text-sm">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-lg font-bold">{post.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, delay: index * 0.2 }}
// >
//   <Card className="h-full hover:shadow-lg transition-all duration-300">
//     <CardHeader>
//       <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
//         <span>{post.date}</span>
//         <span>{post.readTime}</span>
//       </div>
//       <CardTitle className="mb-2">{post.title}</CardTitle>
//       {/* <p className="text-muted-foreground">{post.description}</p> */}
//     </CardHeader>
//     <CardContent>
//       <div className="flex flex-wrap gap-2">
//         {post.tags.map((tag) => (
//           <Badge key={tag} variant="outline">
//             {tag}
//           </Badge>
//         ))}
//       </div>
//     </CardContent>
//   </Card>
// </motion.div>
