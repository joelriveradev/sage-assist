import { ActionFunctionArgs } from '@remix-run/node'
import { LangChainAdapter } from 'ai'
import { convertToLangChainMessages } from '@/lib/ai/utils'
import { QAChain } from '@/lib/ai/chain'

export const action = async ({ request }: ActionFunctionArgs) => {
  const { messages } = await request.json()

  const chat_history = convertToLangChainMessages(messages)
  const query = messages[messages.length - 1].content

  const stream = await QAChain.stream({
    query,
    chat_history
  })

  return LangChainAdapter.toDataStreamResponse(stream)
}
