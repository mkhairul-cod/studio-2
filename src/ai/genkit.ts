import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import * as next from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    next.next(),
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracing: true,
});
