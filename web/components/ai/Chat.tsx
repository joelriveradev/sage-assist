import { useChat } from 'ai/react'
import { X, ArrowUp } from 'lucide-react'
import { Message } from 'ai'
import { cn, generateUniqueId } from '../../lib/utils'
import { ChatMessage } from './Message'
import { Button } from '../ui/button'
import { ChatInput } from './Input'

interface ChatProps {
  id?: string
  history?: Message[]
  className?: string
}

export function Chat({
  id = generateUniqueId(),
  history = [],
  className
}: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      initialMessages: history
    })

  return (
    <div className={cn('flex flex-col w-full mx-auto min-h-dvh', className)}>
      <div className='pb-28'>
        {messages.map((message) => {
          return <ChatMessage key={message.id} {...message} />
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div className='fixed bottom-0 w-full md:max-w-4xl flex items-center mb-5 -translate-x-1/2 left-1/2 md:px-7'>
          <ChatInput input={input} handleInputChange={handleInputChange} />

          {isLoading ? (
            <Button
              type='button'
              className='absolute md:right-14 right-5 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700'
              onClick={stop}
            >
              <X size={15} />
            </Button>
          ) : (
            <Button
              type='submit'
              className={cn(
                'absolute md:right-14 right-5 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700 disabled:bg-stone-300'
              )}
              disabled={!input || isLoading}
            >
              <ArrowUp size={15} />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
