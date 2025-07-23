'use server';
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  // It's a good practice to define the default model here
  // to ensure consistency across different flows.
  model: 'googleai/gemini-pro',
});
