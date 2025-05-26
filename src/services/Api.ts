import openAI from "./OpenAI";

const sendMessageToOpenAI = async (userQuery: string) => {
  try {
    const response = await openAI.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: userQuery,
    });

    console.log(response);
    return { success: true, response: response.text };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export default sendMessageToOpenAI;
