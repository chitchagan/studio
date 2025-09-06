import { mockTools } from '@/lib/data';
import { ToolsList } from '@/components/tools-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ToolsSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 13 }).map((_, i) => (
                <Skeleton key={i} className="h-28 w-full" />
            ))}
        </div>
    )
}

export default async function ToolsExplorerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">AI Tools</h1>
        <p className="text-muted-foreground mt-2">Discover the most popular and powerful AI tools in the market.</p>
      </div>
      <Suspense fallback={<ToolsSkeleton />}>
        <ToolsList tools={mockTools} />
      </Suspense>
    </div>
  );
}
