import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID

// OpenAI Models
export type OpenAILLMID =
  | "gpt-4o"
  | "gpt-4-turbo-preview"
  | "gpt-4-vision-preview"
  | "gpt-4"
  | "gpt-3.5-turbo"

// Google Models
export type GoogleLLMID =
  | "gemini-pro"
  | "gemini-pro-vision"
  | "gemini-1.5-pro-latest"
  | "gemini-1.5-flash"

// Anthropic Models
export type AnthropicLLMID =
  | "claude-2.1"
  | "claude-instant-1.2"
  | "claude-3-haiku-20240307"
  | "claude-3-sonnet-20240229"
  | "claude-3-opus-20240229"
  | "claude-3-5-sonnet-20240620"

// Mistral Models
export type MistralLLMID =
  | "mistral-tiny"
  | "mistral-small-latest"
  | "mistral-medium-latest"
  | "mistral-large-latest"

// Groq Models
export type GroqLLMID =
  | "llama-3.1-8b-instant"
  | "llama-3.3-70b-versatile"
  | "openai/gpt-oss-20b"
  | "openai/gpt-oss-120b"
  | "qwen/qwen3-32b"

// Perplexity Models
export type PerplexityLLMID =
  | "pplx-7b-online"
  | "pplx-70b-online"
  | "pplx-7b-chat"
  | "pplx-70b-chat"
  | "mixtral-8x7b-instruct"
  | "mistral-7b-instruct"
  | "llama-2-70b-chat"
  | "codellama-34b-instruct"
  | "codellama-70b-instruct"
  | "sonar-small-chat"
  | "sonar-small-online"
  | "sonar-medium-chat"
  | "sonar-medium-online"

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
