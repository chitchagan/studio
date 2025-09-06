import { mockJobs } from '@/lib/data';
import { extractSkills } from '@/ai/flows/extract-skills-from-job-description';
import { SkillsList } from '@/components/skills-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function getUniqueSkills() {
  const allSkillsPromises = mockJobs.map(job => extractSkills({ jobDescription: job.description }));
  
  try {
    const allSkillsResults = await Promise.all(allSkillsPromises);
    const skillSet = new Set<string>();
    allSkillsResults.forEach(result => {
      if (result && result.skills) {
        result.skills.forEach(skill => {
            if(skill.length > 1 && skill.length < 30) { // Basic filtering for quality
               skillSet.add(skill.trim());
            }
        });
      }
    });
    return Array.from(skillSet).sort((a, b) => a.localeCompare(b));
  } catch (error) {
    console.error("Failed to get unique skills:", error);
    return [];
  }
}

function SkillsSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
            ))}
        </div>
    )
}

export default async function SkillsExplorerPage() {
  const uniqueSkills = await getUniqueSkills();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">Skills Explorer</h1>
        <p className="text-muted-foreground mt-2">Discover the most in-demand skills in the current job market.</p>
      </div>
      <Suspense fallback={<SkillsSkeleton />}>
        <SkillsList skills={uniqueSkills} />
      </Suspense>
    </div>
  );
}
