# Skill: RAG Implementation

## What is RAG?
Retrieval Augmented Generation — Combining information retrieval with LLM generation to produce accurate, sourced answers.

## Architecture
1. Data ingestion (documents, databases, APIs)
2. Chunking and embedding
3. Vector storage (Pinecone, Weaviate, Chroma)
4. Query matching (similarity search)
5. LLM generation with retrieved context

## Implementation Steps
1. Choose vector DB (Pinecone, Chroma, Weaviate)
2. Set up chunking strategy (size, overlap)
3. Create embeddings (OpenAI, Cohere, local)
4. Build retrieval pipeline
5. Implement generation with context
6. Evaluate and iterate

## Code Example (Python + Chroma)
```python
import chromadb
from openai import OpenAI

client = chromadb.Client()
collection = client.create_collection("docs")
collection.add(documents=["doc1 text", "doc2 text"])

results = collection.query(query_texts=["question"], n_results=3)
context = results["documents"][0]

response = OpenAI().chat.completions.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": f"Answer using: {context}"
    }]
)
```

## Key Considerations
- Chunk size: balance context vs. precision
- Overlap: prevent context loss at boundaries
- Metadata: include source information
- Re-ranking: improve relevance of top results
- Caching: reduce repeated queries
