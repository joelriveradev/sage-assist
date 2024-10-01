import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function ChatInput({ input, handleInputChange }: ChatInputProps) {
  return (
    <Input
      className={cn(
        'w-full h-12 px-4 border text-base border-neutral-200 rounded-xl placeholder:text-neutral-400',
        'hover:border-neutral-400'
      )}
      value={input}
      placeholder='Ask me a question!'
      onChange={handleInputChange}
    />
  )
}
