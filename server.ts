import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini API client lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", company: "(주)다이즈하이미디어" });
  });

  // AI Copywriting & Translation Generator Endpoint
  app.post("/api/ai/copywriting", async (req, res) => {
    try {
      const { prompt, targetLang, section } = req.body;
      const ai = getGeminiClient();

      const systemInstruction = `You are a top-tier marketing content copywriter and translation expert for DAIZ High Media (주식회사 다이즈하이미디어), a leading LED media, DOOH, and AMSIT AI/XR display technology company.
Target language code: ${targetLang || "ko"}.
Generate compelling, professional, executive-level text for the website section "${section || "general"}".
Keep tone: Luxurious, innovative, trustworthy, B2B focused. Response should be concise and directly usable in JSON or raw text.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt || "Generate a professional tagline for an airport LED media tower project.",
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ success: true, text: response.text });
    } catch (error: any) {
      console.error("AI Copywriting Error:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to generate AI copy" });
    }
  });

  // AI Business Feasibility & ROI Analysis Endpoint for Entrepreneurs
  app.post("/api/ai/business-feasibility", async (req, res) => {
    try {
      const { locationType, screenSize, estimatedTraffic, operatingHours, initialBudget } = req.body;
      const ai = getGeminiClient();

      const prompt = `Analyze DOOH LED Media Business Feasibility for a newcomer entrepreneur with the following inputs:
- Location / Site Type: ${locationType || "Airport / Landmark Commercial Building"}
- Screen Size / Specs: ${screenSize || "100 sqm 4K High Brightness LED"}
- Daily Foot Traffic: ${estimatedTraffic || "50,000 visitors/day"}
- Operating Hours: ${operatingHours || "18 hours/day"}
- Estimated Budget: ${initialBudget || "USD 100,000"}

Provide a realistic, easy-to-understand business feasibility report from a seasoned LED media company (DAIZ High Media) perspective.
Include:
1. Feasibility Rating (High / Medium / Requires Site Optimization)
2. Revenue Potential (Estimated CPM, monthly ad slot sales)
3. Operational Cost Advantages with DAIZ AMSIT Technology (Aero-Flex weight/wind power saving, MW Controller 36K stability, ZERO claim record)
4. ROI & Payback Period estimate
5. Beginner's 3-Step Strategy for entry into DOOH media assets.
Write in clear Korean (or language requested), formatted with neat bullet points and simple financial explanations for a beginner entrepreneur.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are the Senior Executive Feasibility Advisor at DAIZ High Media. Explain business viability easily for non-experts with realistic, high-margin DOOH calculations.",
          temperature: 0.5,
        },
      });

      res.json({ success: true, analysis: response.text });
    } catch (error: any) {
      console.error("AI Business Feasibility Error:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to generate feasibility report" });
    }
  });

  // Vite Middleware for dev & static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
