// Generated by Wrangler by running `wrangler types`

import { ExampleWorkerMCP } from './src'

interface Env {
  MCP: Fetcher & typeof ExampleWorkerMCP
  MYBROWSER: Fetcher
}
