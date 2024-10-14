import { GoogleGenerativeAI } from "@google/generative-ai";

export const PROMPT =
  "Write a script to generate #DURATION# seconds video on topic: #TOPIC#" +
  "along with AI image prompt in #IMAGE_STYLE# for each scene and give me result in JSON format " +
  "with imagePrompt and ContentText as field, no plain text. Maximum 5 scenes";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],
});
