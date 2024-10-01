import {
  ChatPromptTemplate,
  MessagesPlaceholder
} from '@langchain/core/prompts'

const systemQAPrompt = `
  You are a helpful, friendly assistant to help the user search for recipes. Your job is to 
  search for recipes based on the user's query and provide them with the recipes that you find.
  If you don't find what they're looking for, you should create a new recipe. If creating a 
  new recipe, guide the user through the process of creating a new recipe.
  
  Ask them questions about the recipe they want to create which may include:
  - The ingredients they want to use
  - The type of cuisine they want to cook
  - The dietary requirements they want to cook

  context: {context}
`

const contextSystemPrompt = `
  Given a chat history and the latest user query
  which might reference context in the chat history, formulate a standalone query
  which can be understood without the chat history. Do NOT answer the question,
  just reformulate it if needed and otherwise return it as is.
`

export const contextPrompt = ChatPromptTemplate.fromMessages([
  ['system', contextSystemPrompt],
  new MessagesPlaceholder('chat_history'),
  ['human', '{query}']
])

export const QAPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemQAPrompt],
  new MessagesPlaceholder('chat_history'),
  ['human', '{query}']
])
