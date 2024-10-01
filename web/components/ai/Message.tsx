import { Message } from 'ai'
import { cn } from '@/lib/utils'

import ReactMarkdown from 'react-markdown'

interface ChatMessageProps extends Message {
  className?: string
}

export function ChatMessage({ className, content, role }: ChatMessageProps) {
  const isAssistant = role === 'assistant'
  const isHuman = role === 'user'

  return (
    <>
      <ReactMarkdown
        components={{
          ol: ({ children }) => (
            <ol className='whitespace-normal'>{children}</ol>
          ),
          ul: ({ children }) => (
            <ul className='whitespace-normal'>{children}</ul>
          ),
          li: ({ children }) => <li className='mb-5 last:mb-0'>{children}</li>
        }}
        className={cn({
          'px-4 text-neutral-700 whitespace-pre-wrap text-lg': isAssistant,
          'border border-black/40 p-2 px-4 rounded-xl inline-flex text-black/40 my-5 first:mt-0':
            isHuman
        })}
      >
        {content}
      </ReactMarkdown>
    </>
  )
}
