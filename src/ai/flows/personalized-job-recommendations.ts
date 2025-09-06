// src/ai/flows/personalized-job-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized course recommendations based on user profile and search history.
 *
 * This file defines a Genkit flow that takes user profile and search history as input
 * and returns a list of personalized course recommendations.
 *
 * @interface PersonalizedJobRecommendationsInput - The input type for the personalizedJobRecommendations function.
 * @interface PersonalizedJobRecommendationsOutput - The output type for the personalizedJobRecommendations function.
 * @function personalizedJobRecommendations - A function that generates personalized course recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedJobRecommendationsInputSchema = z.object({
  userProfile: z.string().describe('The user profile, including skills, experience, and qualifications.'),
  searchHistory: z.string().describe('The user search history, including job titles, keywords, and locations.'),
  jobPostings: z.string().describe('A list of available courses.'),
});
export type PersonalizedJobRecommendationsInput = z.infer<typeof PersonalizedJobRecommendationsInputSchema>;

const PersonalizedJobRecommendationsOutputSchema = z.object({
  jobRecommendations: z.array(z.string()).describe('A list of personalized course recommendations.'),
});
export type PersonalizedJobRecommendationsOutput = z.infer<typeof PersonalizedJobRecommendationsOutputSchema>;

/**
 * Generates personalized course recommendations based on the user's profile and search history.
 * @param input - The input containing the user profile and search history.
 * @returns A list of personalized course recommendations.
 */
export async function personalizedJobRecommendations(input: PersonalizedJobRecommendationsInput): Promise<PersonalizedJobRecommendationsOutput> {
  return personalizedJobRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedJobRecommendationsPrompt',
  input: {
    schema: PersonalizedJobRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedJobRecommendationsOutputSchema,
  },
  prompt: `You are a course recommendation expert. Given a user profile, their search history, and a list of available courses, you will provide personalized course recommendations.

User Profile: {{{userProfile}}}
Search History: {{{searchHistory}}}
Courses: {{{jobPostings}}}

Based on this information, recommend courses that match the user's interests and skills.
`,
});

const personalizedJobRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedJobRecommendationsFlow',
    inputSchema: PersonalizedJobRecommendationsInputSchema,
    outputSchema: PersonalizedJobRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
