import { Suspense } from 'react';
import { PersonalizedRecommendations } from '@/components/personalized-recommendations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function RecommendationsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-8 w-24 mt-4" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-8 w-24 mt-4" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-8 w-24 mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">Welcome to StanSkill</h1>
        <p className="text-muted-foreground mt-2">Your AI-powered co-pilot for career growth. Here's what's new for you.</p>
      </div>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Recommended Courses</h2>
        <Suspense fallback={<RecommendationsSkeleton />}>
          <PersonalizedRecommendations />
        </Suspense>
      </section>

      {/* Placeholder for other dashboard components */}
    </div>
  );
}
