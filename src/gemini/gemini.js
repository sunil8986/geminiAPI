import { GoogleGenAI } from "@google/genai";

const apikey = "AIzaSyDJjQEMORmDL8ge3nVkzG1gShB60qjMjNo";

const ai = new GoogleGenAI({ apiKey: apikey });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response.text;
}

export default main;
