// import BlogPost from "@/components/blog/blog-post";
// import { posts } from "@/lib/blog-data";

// export async function generateStaticParams() {
//   return Object.keys(posts).map((id) => ({
//     id,
//   }));
// }

// export default function BlogPostPage({ params }: { params: { id: string } }) {
//   return <BlogPost id={params.id} />;
// }

"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);
  const router = useRouter();

  if (!post) {
    return <div>Post not found</div>;
  }

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
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-col gap-3 md:flex-row items-center justify-between mb-8">
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
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <Card>
            <CardContent className="p-6">
              {post.content.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                  <p className="text-gray-700">{section.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// <div className="container mx-auto max-w-screen-lg px-4 py-8">
//   <motion.article
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//   >
//     <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
//     <p className="text-muted-foreground mb-6">{post.date}</p>
//     <Image
//       src={post.image}
//       alt={post.title}
//       width={800}
//       height={400}
//       className="w-full h-64 object-cover rounded-lg mb-6"
//     />
//     {/* <div className="prose prose-lg max-w-none">
//       {post.content.split("\n").map((paragraph, index) => (
//         <p key={index} className="mb-4">
//           {paragraph}
//         </p>
//       ))}
//     </div> */}
//   </motion.article>
// </div>
