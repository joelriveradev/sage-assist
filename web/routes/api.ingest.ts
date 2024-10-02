import path from 'path'

import { LoaderFunctionArgs, json } from '@remix-run/node'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { pineconeStore } from '@/lib/ai/retrievers'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 })
  }

  const vectorStore = await pineconeStore
  const recipesPath = path.join(process.cwd(), 'web', 'lib', 'recipes')

  const dirLoader = new DirectoryLoader(recipesPath, {
    '.txt': (path) => new TextLoader(path)
  })

  const docs = await dirLoader.load()
  await vectorStore.addDocuments(docs)

  return json({
    success: true,
    message: 'Data ingestion successful'
  })
}
