"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Back() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="mb-3 rounded-full group flex justify-center items-center gap-2 bg-primary px-6 py-3"
    >
      <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:translate-x-2" />
      Back
    </Button>
  );
}
