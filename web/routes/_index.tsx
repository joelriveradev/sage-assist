import { Page } from '@shopify/polaris'
import { Chat } from '../components/ai/Chat'

export default function Index() {
  return (
    <Page title='Sage Assist'>
      <div className='w-full h-dvh'>
        <Chat />
      </div>
    </Page>
  )
}
