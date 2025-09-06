"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Tool } from '@/lib/types';
import { LogoDisplay } from './logo-display';

export function ToolsList({ tools }: { tools: Tool[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchTerm) return tools;
    return tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tools, searchTerm]);

  return (
    <div className="space-y-6">
      <Input
        type="search"
        placeholder="Search for a tool..."
        className="max-w-sm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredTools.map(tool => (
            <Card key={tool.name} className="p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow aspect-square">
                <LogoDisplay name={tool.name} className="h-20 w-20 mb-4 text-white" />
                <CardTitle className="text-base font-medium">{tool.name}</CardTitle>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-lg font-medium">No Tools Found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
                Your search for "{searchTerm}" did not match any tools.
            </p>
        </div>
      )}
    </div>
  );
}
