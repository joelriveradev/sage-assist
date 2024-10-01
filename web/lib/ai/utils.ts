import { AIMessage, HumanMessage } from '@langchain/core/messages'
import { Message } from 'ai'

export const convertToLangChainMessages = (messages: Message[]) => {
  return messages.map(({ role, content }) => {
    return role === 'user' ? new HumanMessage(content) : new AIMessage(content)
  })
}
