import { useChat } from 'ai/react'
import { X, ArrowUp } from 'lucide-react'
import { Message } from 'ai'
import { cn, generateUniqueId } from '@/lib/utils'
import { ChatMessage } from '@/components/ai/Message'
import { Button } from '@/components/ui/button'
import { ChatInput } from '@/components/ai/Input'
import { ScrollArea } from '@/components/ui/scroll-area'

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
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-[1fr_auto] w-full max-w-2xl mx-auto h-[calc(100dvh-1.5rem)] bg-neutral-50 rounded-2xl',
        className
      )}
    >
      <ScrollArea className='w-full px-4'>
        {messages.map((message) => {
          return <ChatMessage key={message.id} {...message} />
        })}
      </ScrollArea>

      <form onSubmit={handleSubmit}>
        <div className='w-full md:max-w-2xl flex items-center mb-6 px-5 md:px-7'>
          <ChatInput input={input} handleInputChange={handleInputChange} />

          {isLoading ? (
            <Button
              type='button'
              className='rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700'
              onClick={stop}
            >
              <X size={15} />
            </Button>
          ) : (
            <Button
              type='submit'
              className={cn(
                'rounded-full ml-4 w-7 h-7 p-0 shrink-0 bg-stone-700 disabled:bg-stone-300'
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
