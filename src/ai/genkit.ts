import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    next(),
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  // It's a good practice to define the default model here
  // to ensure consistency across different flows.
  defaultModel: 'googleai/gemini-pro',
  logLevel: 'debug',
  enableTracing: true,
});
