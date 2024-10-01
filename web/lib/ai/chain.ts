import { GPT4oMini } from '@/lib/ai/llm'
import { contextPrompt } from '@/lib/ai/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { QAPrompt } from '@/lib/ai/prompts'
import { contextualizedQuestion } from '@/lib/ai/helpers'
import { formatDocumentsAsString } from 'langchain/util/document'
import { pineconeStore } from '@/lib/ai/retrievers'

import {
  RunnablePassthrough,
  RunnableSequence
} from '@langchain/core/runnables'

export const contextChain = contextPrompt
  .pipe(GPT4oMini)
  .pipe(new StringOutputParser())

export const QAChain = RunnableSequence.from([
  RunnablePassthrough.assign({
    context: async (input: Record<string, unknown>) => {
      if ('chat_history' in input) {
        const vectorStore = await pineconeStore
        const retriever = vectorStore.asRetriever()

        const chain = contextualizedQuestion(input) as any
        return chain.pipe(retriever).pipe(formatDocumentsAsString)
      }
      return ''
    }
  }),
  QAPrompt,
  GPT4oMini
])
