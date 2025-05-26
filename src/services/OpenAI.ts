import { GoogleGenAI } from "@google/genai";

const openAI = new GoogleGenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export default openAI;