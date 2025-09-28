'use server';

/**
 * @fileOverview Checks the contact form submission for inappropriate language.
 *
 * - checkContactFormLanguage - A function that checks the contact form submission for inappropriate language.
 * - ContactFormLanguageCheckInput - The input type for the checkContactFormLanguage function.
 * - ContactFormLanguageCheckOutput - The return type for the checkContactFormLanguage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormLanguageCheckInputSchema = z.object({
  message: z
    .string()
    .describe('The message from the contact form submission.'),
});
export type ContactFormLanguageCheckInput = z.infer<
  typeof ContactFormLanguageCheckInputSchema
>;

const ContactFormLanguageCheckOutputSchema = z.object({
  isAppropriate: z
    .boolean()
    .describe(
      'Whether the message is appropriate and does not contain inappropriate language.'
    ),
  reason: z
    .string()
    .optional()
    .describe('The reason why the message is inappropriate.'),
});
export type ContactFormLanguageCheckOutput = z.infer<
  typeof ContactFormLanguageCheckOutputSchema
>;

export async function checkContactFormLanguage(
  input: ContactFormLanguageCheckInput
): Promise<ContactFormLanguageCheckOutput> {
  return contactFormLanguageCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormLanguageCheckPrompt',
  input: {schema: ContactFormLanguageCheckInputSchema},
  output: {schema: ContactFormLanguageCheckOutputSchema},
  prompt: `You are a helpful assistant that checks if a message from a contact form submission contains inappropriate language.

  Determine if the message is appropriate and does not contain any offensive, disrespectful, or unprofessional language.

  Message: {{{message}}}`,
});

const contactFormLanguageCheckFlow = ai.defineFlow(
  {
    name: 'contactFormLanguageCheckFlow',
    inputSchema: ContactFormLanguageCheckInputSchema,
    outputSchema: ContactFormLanguageCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
