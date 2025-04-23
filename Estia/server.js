const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret key (DO NOT expose in frontend)
const OPENROUTER_API_KEY = "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";

// Endpoint
app.post("/generate", async (req, res) => {
    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: "No prompt provided" });
    }

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "google/gemini-2.0-flash-exp:free",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        
        console.log("🔍 Full Gemini response:", response.data);

        let aiOutput;

        // Gemini may return in `candidates`
        if (response.data.candidates && response.data.candidates.length > 0) {
            aiOutput = response.data.candidates[0].content.parts.map(part => part.text).join("");
        } 
        // Or fallback to OpenAI-style
        else if (response.data.choices && response.data.choices.length > 0) {
            aiOutput = response.data.choices[0].message.content;
        } else {
            return res.status(500).json({ error: "No valid response from AI", details: response.data });
        }

        res.json({ output: aiOutput });

    } catch (err) {
        console.error("OpenRouter API error:", err.response?.data || err.message);
        res.status(500).json({
            error: "AI error",
            details: err.response?.data || err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
