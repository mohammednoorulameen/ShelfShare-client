import { config } from "@/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = config.GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

export interface GeminiBookData {
  description: string;
  author: string;
  publisher: string;
  language: string;
  categoryName: string;
  estimatedPrice?: number;
}

export const autofillBookDetails = async (bookTitle: string): Promise<GeminiBookData | null> => {
  if (!apiKey) {
    console.warn("API Key missing.");
    return null;
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
      Provide metadata for the book "${bookTitle}" AS RAW JSON ONLY.
      Do NOT include backticks or markdown.
      Use exactly this structure:

      {
        "description": "",
        "author": "",
        "publisher": "",
        "language": "",
        "categoryName": "",
        "estimatedPrice": 0
      }
    `;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    // CLEAN THE RESPONSE (fix your error)
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (err) {
    console.error("Gemini autofill error:", err);
    return null;
  }
};
