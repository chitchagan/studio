import { personalizedJobRecommendations } from '@/ai/flows/personalized-job-recommendations';
import { mockUser, mockJobs } from '@/lib/data';
import { JobCard } from '@/components/job-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export async function PersonalizedRecommendations() {
  const jobPostings = JSON.stringify(
    mockJobs.map(j => ({ id: j.id, title: j.title, description: j.description }))
  );
  // User profile is now hardcoded for recommendations, as there are no logged in users.
  const userProfile = `Skills: Python, Generative AI. Experience: Software Developer.`;
  const searchHistory = "Generative AI, Agentic Design";

  try {
    const result = await personalizedJobRecommendations({
      userProfile,
      searchHistory,
      jobPostings,
    });

    const recommendedJobs = mockJobs.filter(job =>
      result.jobRecommendations.some(rec => rec.includes(job.title))
    ).slice(0, 3); // Limit to 3 recommendations for the dashboard

    if (recommendedJobs.length === 0) {
      return (
        <Card className="flex items-center justify-center p-8">
            <p className="text-muted-foreground">No personalized recommendations available right now.</p>
        </Card>
      );
    }
    
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendedJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to get personalized recommendations:", error);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Error</CardTitle>
                <CardDescription>Could not load recommendations</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-destructive">There was an issue fetching your personalized course recommendations. Please try again later.</p>
            </CardContent>
        </Card>
    )
  }
}
