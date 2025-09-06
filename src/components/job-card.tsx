import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Job } from '@/lib/types';
import { MapPin, DollarSign, Briefcase, Calendar, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { ApplyButton } from './apply-button';
import { Separator } from './ui/separator';

function renderDescription(description: string) {
  const lines = description.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="text-foreground/80 leading-relaxed space-y-4">
      {lines.map((line, index) => {
        if (line.startsWith('Week') || line.startsWith('By Day 28')) {
          return <h4 key={index} className="text-md font-semibold text-foreground mt-4">{line}</h4>;
        }
        if (line.startsWith('•')) {
          return (
            <ul key={index} className="list-disc pl-5 space-y-2">
              <li className="pl-2">{line.substring(1).trim()}</li>
            </ul>
          );
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
}


export function JobCard({ job }: { job: Job }) {
  return (
    <Dialog>
      <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="flex flex-row items-start gap-4">
          <Avatar className="h-12 w-12 rounded-sm">
            {job.logo && <AvatarImage src={job.logo} alt={`${job.company} logo`} data-ai-hint="logo" />}
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
          <DialogTrigger asChild>
            <Button className="w-full">View Details</Button>
          </DialogTrigger>
        </div>
      </Card>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <ScrollArea className="h-full pr-6">
          <CardHeader className="p-0 pt-4">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-20 w-20 rounded-md border">
                {job.logo && <AvatarImage src={job.logo} alt={`${job.company} logo`} data-ai-hint="logo" />}
                <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-headline mb-1">{job.title}</DialogTitle>
                <DialogDescription className="text-lg">{job.company}</DialogDescription>
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
          <CardContent className="p-0 pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold font-headline">Full Course Description</h3>
            </div>
            <Separator />
            
            {renderDescription(job.description)}

          </CardContent>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
