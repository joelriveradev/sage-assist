import { ChatOpenAI } from '@langchain/openai'

export const GPT4oMini = new ChatOpenAI({
  modelName: 'gpt-4o-mini',
  temperature: 0.8
})

export const GPT4o = new ChatOpenAI({
  modelName: 'gpt-4o',
  temperature: 0.55
})
