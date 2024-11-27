import CaseStudy from "@/components/case-studies/case-studies-posts";
import { projects } from "@/lib/case-studies-data";

// Make sure generateStaticParams is an async function that returns a promise
export async function generateStaticParams() {
  // Return a promise that resolves to an array of objects containing the id
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return <CaseStudy id={params.id} />;
}
