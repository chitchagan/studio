import { notFound } from 'next/navigation';
import { mockJobs } from '@/lib/data';
import { extractSkills } from '@/ai/flows/extract-skills-from-job-description';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ApplyButton } from '@/components/apply-button';
import { MapPin, DollarSign, Briefcase, Calendar } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { AiSkillsDialog } from '@/components/ai-skills-dialog';
import { Button } from '@/components/ui/button';

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobs.find(j => j.id === params.id);
  if (!job) {
    notFound();
  }

  let skills: string[] = [];
  try {
    const skillsResult = await extractSkills({ jobDescription: job.description });
    skills = skillsResult.skills;
  } catch (error) {
    console.error("Failed to extract skills:", error);
    // Continue rendering without skills if AI fails
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/30 p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-20 w-20 rounded-md border">
              {job.logo && <AvatarImage src={job.logo} alt={`${job.company} logo`} data-ai-hint="logo" />}
              <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-3xl font-headline mb-1">{job.title}</CardTitle>
              <CardDescription className="text-lg">{job.company}</CardDescription>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                {job.location && <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</div>}
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> {job.type}</div>
                {job.salary && <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> {job.salary.includes('INR') ? `Fees: ${job.salary}` : job.salary}</div>}
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Posted on {new Date(job.postedDate).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="shrink-0">
              <ApplyButton job={job} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-headline">Full Course Description</h3>
            {skills.length > 0 && (
                <AiSkillsDialog skills={skills} />
            )}
          </div>
          <Separator />
          
          <div className="text-foreground/80 leading-relaxed space-y-4">
            {job.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
