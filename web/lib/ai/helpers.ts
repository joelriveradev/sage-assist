import { contextChain } from '@/lib/ai/chain'

export const contextualizedQuestion = (input: Record<string, unknown>) => {
  if ('chat_history' in input) {
    return contextChain
  }
  return input.query
}
