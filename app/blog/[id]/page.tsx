import BlogPost from "@/components/blog/blog-post";
import { posts } from "@/lib/blog-data";

// Make sure generateStaticParams is an async function and returns a promise
export async function generateStaticParams() {
  // Return a promise that resolves to an array of objects with id
  return Object.keys(posts).map((id) => ({
    params: { id },
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost id={params.id} />;
}
