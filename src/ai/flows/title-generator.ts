'use server';
/**
 * @fileOverview A flow for generating research titles.
 *
 * - generateTitles - A function that generates research titles based on a topic.
 * - GenerateTitlesInput - The input type for the generateTitles function.
 * - GenerateTitlesOutput - The return type for the generateTitles function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateTitlesInputSchema = z.object({
  researchTopic: z.string().describe('A short description of the research topic.'),
});
export type GenerateTitlesInput = z.infer<typeof GenerateTitlesInputSchema>;

const GenerateTitlesOutputSchema = z.object({
  titles: z.array(z.string()).describe('An array of 5 creative and academic research titles.'),
});
export type GenerateTitlesOutput = z.infer<typeof GenerateTitlesOutputSchema>;

export async function generateTitles(input: GenerateTitlesInput): Promise<GenerateTitlesOutput> {
  return generateTitlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTitlesPrompt',
  input: { schema: GenerateTitlesInputSchema },
  output: { schema: GenerateTitlesOutputSchema },
  prompt: `You are an expert academic advisor. Based on the following research topic, generate 5 creative, insightful, and academically appropriate research titles.

The titles should be clear, concise, and reflect the core of the research topic.

Research Topic: {{{researchTopic}}}`,
});

const generateTitlesFlow = ai.defineFlow(
  {
    name: 'generateTitlesFlow',
    inputSchema: GenerateTitlesInputSchema,
    outputSchema: GenerateTitlesOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
