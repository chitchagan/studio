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
        <div className="mt-4 text-foreground/80 space-y-2">
            <p>At Stanskill, we specialize in corporate training on Generative & Agentic AI for today’s digital workforce.</p>
            <p>Our programs simplify complex AI concepts into hands-on, low-code learning that anyone can apply.</p>
            <p>We deliver practical workshops, projects, and capstones designed for HR, IT, Finance, and Marketing teams.</p>
            <p>With a focus on real business use cases and responsible AI adoption, we ensure immediate workplace impact.</p>
            <p>Join us to upskill your teams and future-proof your organization in the age of AI.</p>
        </div>
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
