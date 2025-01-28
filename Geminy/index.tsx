import {
    GoogleGenerativeAI,
   
} from "@google/generative-ai"

const apiKey = "AIzaSyD0X2zh0BEwy5jFzbEWf_4C2xaVUYAqePk";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(contry: string, City: string) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    {
                        text: `"I want you to act as a travel guide specializing in [${contry}] and its cities, including [city]. Provide an engaging and informative travel guide tailored for a traveler visiting [${City}]. Include:

    A brief overview of the city and its unique charm.
    The top 5 must-visit attractions, landmarks, or cultural spots.
    Recommendations for local cuisine, including restaurants or street food options.
    Tips for navigating the city, such as transportation options or local customs.
    Suggested activities or hidden gems for different traveler types (e.g., solo travelers, families, couples, or adventurers).
    Seasonal advice – the best times of year to visit and why.
    Any relevant cultural or safety tips to enhance the experience.

    Please structure your response clearly and in a conversational tone, keeping the tone welcoming and informative. in 3000 word"
    `},
                ],
            },

        ],
    });

    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    return result.response.text()
}

export default run