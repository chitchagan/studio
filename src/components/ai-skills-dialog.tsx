import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';

export function AiSkillsDialog({ skills }: { skills: string[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            <Sparkles className="mr-2 h-4 w-4" />
            View AI-Extracted Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI-Extracted Skills
            </DialogTitle>
          <DialogDescription>
            These are the key skills our AI identified from the course description.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 py-4">
            {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
                </Badge>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
