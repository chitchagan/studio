"use client";

import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/types";

export function ApplyButton({ job }: { job: Job }) {
  const handleApply = () => {
    window.open('https://forms.gle/your-google-form-link', '_blank');
  };

  return (
    <Button onClick={handleApply} className="w-full md:w-auto">
      Enroll Now
    </Button>
  );
}
