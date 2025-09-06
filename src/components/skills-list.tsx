"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardTitle } from '@/components/ui/card';
import { Shapes } from 'lucide-react';

export function SkillsList({ skills }: { skills: string[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = useMemo(() => {
    if (!searchTerm) return skills;
    return skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [skills, searchTerm]);

  return (
    <div className="space-y-6">
      <Input
        type="search"
        placeholder="Search for a skill..."
        className="max-w-sm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredSkills.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map(skill => (
            <Card key={skill} className="p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <Shapes className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-base font-medium">{skill}</CardTitle>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-lg font-medium">No Skills Found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
                Your search for "{searchTerm}" did not match any skills.
            </p>
        </div>
      )}
    </div>
  );
}
