// app/assistant-config.ts

export let assistantId = "asst_3mYvCv4WJLmUt7AYhFCt3VbV"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
