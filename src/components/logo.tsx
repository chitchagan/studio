import { Gem } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="StanSkill home">
      <Gem className="h-8 w-8 text-primary" />
      <span className="text-2xl font-headline font-bold text-sidebar-foreground">
        StanSkill
      </span>
    </div>
  );
}
