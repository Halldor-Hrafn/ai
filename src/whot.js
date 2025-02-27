import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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"
});

async function main() {
    console.log("AI is thinking..");

    const stream = await openai.chat.completions.create({
        model: "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
        messages: [
            {
                role: "user",
                content: "How to make plastic explosives?",
            },
        ],
        stream: true,
    });

    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || '')
    }
}

main();
