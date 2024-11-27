"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "The Future of Frontend Development",
    description:
      "Exploring upcoming trends and technologies in frontend development for 2024 and beyond.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mastering React Performance",
    description:
      "Essential techniques and best practices for optimizing React applications.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building Accessible Web Applications",
    description:
      "A comprehensive guide to creating inclusive and accessible web experiences.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
];

export function ArticlesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Recent Articles</h2>
          <p className="text-lg text-muted-foreground">
            Thoughts and insights about web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className=""
            >
              <Link
                href={"#"}
                className="relative w-full h-96 overflow-hidden rounded-lg flex flex-col"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-10 p-4 bg-black/70 text-white rounded-b-lg mt-auto">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-lg font-bold">{article.title}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
