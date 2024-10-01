import { openai } from '@ai-sdk/openai'
import { ActionFunctionArgs } from '@remix-run/node'
import { streamText, convertToCoreMessages } from 'ai'

export const action = async ({ request }: ActionFunctionArgs) => {
  const { messages } = await request.json()

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages: convertToCoreMessages(messages)
  })

  return result.toDataStreamResponse()
}
