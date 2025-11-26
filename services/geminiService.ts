import { GoogleGenAI } from "@google/genai";
import { BMSAlarm } from '../types';

// Ensure API key is available
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeAlarm = async (alarm: BMSAlarm): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable to use AI features.";
  }

  const modelId = "gemini-2.5-flash"; // Efficient for text analysis

  const prompt = `
    You are an expert Building Management System (BMS) operator and engineer.
    Analyze the following BMS alarm event and provide a concise operational recommendation.
    
    Alarm Context:
    - Equipment: ${alarm.equipment}
    - Description: ${alarm.description}
    - Value: ${alarm.value}
    - Priority: ${alarm.priority}
    - Location: ${alarm.location}
    - Space Occupied: ${alarm.occupancyStatus ? 'Yes' : 'No'}
    - Schedule Active: ${alarm.scheduleActive ? 'Yes' : 'No'}

    Consider the occupancy and schedule context. If the space is unoccupied, suggests if this alarm can be deprioritized or if it still requires immediate attention (e.g., leak, freeze protection).
    
    Format the output as a JSON object with these keys (do not use Markdown code blocks, just raw JSON):
    {
      "summary": "One sentence summary of the issue.",
      "rootCause": "Potential technical root cause.",
      "recommendation": "Actionable step for the operator.",
      "priorityScore": "A number 1-10 indicating urgency based on context."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return JSON.stringify({
      summary: "Error analyzing alarm.",
      rootCause: "AI Service Unavailable",
      recommendation: "Please follow standard manual procedures.",
      priorityScore: 0
    });
  }
};