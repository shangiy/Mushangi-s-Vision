"use server";

import { z } from "zod";
import {
  generateResume,
  GenerateResumeInput,
  GenerateResumeOutput,
} from "@/ai/flows/dynamic-resume";
import {
  checkContactFormLanguage,
} from "@/ai/flows/contact-form-language-check";

export async function getResumeSummary(
  input: GenerateResumeInput
): Promise<GenerateResumeOutput> {
  return await generateResume(input);
}

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  try {
    const languageCheck = await checkContactFormLanguage({
      message: values.message,
    });

    if (!languageCheck.isAppropriate) {
      return {
        success: false,
        error:
          languageCheck.reason ||
          "Your message was flagged as inappropriate. Please revise and resubmit.",
      };
    }

    // In a real application, you would now send the email.
    // For this demo, we'll just simulate a success response.
    console.log("Form submitted successfully:", values);

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
