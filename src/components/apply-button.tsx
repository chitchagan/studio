"use client";

import { Button } from "@/components/ui/button";
import { useApplications } from "@/context/application-context";
import type { Job } from "@/lib/types";
import { Check } from "lucide-react";

export function ApplyButton({ job }: { job: Job }) {
  const { addApplication, isJobApplied } = useApplications();
  const hasApplied = isJobApplied(job.id);

  if (hasApplied) {
    return (
      <Button disabled variant="outline" className="w-full md:w-auto">
        <Check className="mr-2 h-4 w-4" />
        Applied
      </Button>
    );
  }

  return (
    <Button onClick={() => addApplication(job)} className="w-full md:w-auto">
      Apply Now
    </Button>
  );
}
