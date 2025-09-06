import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Job } from '@/lib/types';
import { MapPin, DollarSign } from 'lucide-react';
import { Badge } from './ui/badge';

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar className="h-12 w-12 rounded-sm">
          <AvatarImage src={job.logo} alt={`${job.company} logo`} data-ai-hint="logo" />
          <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg font-headline">{job.title}</CardTitle>
          <CardDescription>{job.company}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          {job.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
          )}
          {job.salary && (
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary.includes('INR') ? `Fees: ${job.salary}` : job.salary}</span>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <Badge variant="outline">{job.type}</Badge>
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild className="w-full">
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
}
