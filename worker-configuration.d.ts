// Generated by Wrangler by running `wrangler types`

import { ExampleWorkerMCP } from './src'

interface Env {
  MCP: Service<ExampleWorkerMCP>
  MYBROWSER: Fetcher
  KV: KVNamespace
}
