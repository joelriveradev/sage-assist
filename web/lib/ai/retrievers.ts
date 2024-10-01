import { PineconeStore } from '@langchain/pinecone'
import { Pinecone as PineconeClient } from '@pinecone-database/pinecone'
import { OpenAIEmbeddings } from '@langchain/openai'

const embeddings = new OpenAIEmbeddings({
  model: 'text-embedding-3-small'
})

const pinecone = new PineconeClient()
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX as string)

export const pineconeStore = PineconeStore.fromExistingIndex(embeddings, {
  pineconeIndex
})
