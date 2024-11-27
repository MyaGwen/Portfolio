import BlogPost from "@/components/blog/blog-post";
import { posts } from "@/lib/blog-data";

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost id={params.id} />;
}