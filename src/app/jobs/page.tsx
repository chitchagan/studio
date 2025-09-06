import { JobCard } from "@/components/job-card";
import { mockJobs } from "@/lib/data";

export default function JobsPage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">Explore Job Openings</h1>
        <p className="text-muted-foreground mt-2">Find your next career move from our curated list of opportunities.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
