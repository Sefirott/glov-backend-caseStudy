import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export const handler = async (event) => {
  if (event.body == undefined) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
      body: JSON.stringify("No Message Recieved"),
    };
  }

  const response = JSON.parse(event.body);

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a professional customer service who answers customer questions`,
      },
      ...response.value.map((message) => ({
        role: message.role === "gpt" ? "assistant" : "user",
        content: message.message,
      })),
    ],
    model: "gpt-3.5-turbo",
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify(chatCompletion.choices[0].message.content),
  };
};
