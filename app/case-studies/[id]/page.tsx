import CaseStudy from "@/components/case-studies/case-studies-posts";
import { projects } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  return <CaseStudy id={params.id} />;
}
