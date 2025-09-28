// src/ai/flows/dynamic-resume.ts
'use server';

/**
 * @fileOverview A dynamic resume generator flow.
 *
 * - generateResume - A function that generates a resume.
 * - GenerateResumeInput - The input type for the generateResume function.
 * - GenerateResumeOutput - The return type for the generateResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  experience: z.string().describe('A detailed description of the person\'s work experience.'),
  skills: z.string().describe('A list of the person\'s skills.'),
});

export type GenerateResumeInput = z.infer<typeof GenerateResumeInputSchema>;

const GenerateResumeOutputSchema = z.object({
  resume: z.string().describe('The generated resume in a readable format.'),
});

export type GenerateResumeOutput = z.infer<typeof GenerateResumeOutputSchema>;

export async function generateResume(input: GenerateResumeInput): Promise<GenerateResumeOutput> {
  return generateResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResumePrompt',
  input: {schema: GenerateResumeInputSchema},
  output: {schema: GenerateResumeOutputSchema},
  prompt: `You are a resume writer. You will generate a resume for the person based on the following information.

Name: {{{name}}}
Experience: {{{experience}}}
Skills: {{{skills}}}

Please generate a well-formatted and readable resume.`,
});

const generateResumeFlow = ai.defineFlow(
  {
    name: 'generateResumeFlow',
    inputSchema: GenerateResumeInputSchema,
    outputSchema: GenerateResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
