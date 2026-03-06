import { LLM } from "@/types"

const GROQ_PLATFORM_LINK = "https://groq.com/"

const LLAMA_31_8B: LLM = {
  modelId: "llama-3.1-8b-instant",
  modelName: "Llama 3.1 8B Instant",
  provider: "groq",
  hostedId: "llama-3.1-8b-instant",
  platformLink: GROQ_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.08
  }
}

const LLAMA_33_70B: LLM = {
  modelId: "llama-3.3-70b-versatile",
  modelName: "Llama 3.3 70B Versatile",
  provider: "groq",
  hostedId: "llama-3.3-70b-versatile",
  platformLink: GROQ_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

const GPT_OSS_20B: LLM = {
  modelId: "openai/gpt-oss-20b",
  modelName: "GPT OSS 20B",
  provider: "groq",
  hostedId: "openai/gpt-oss-20b",
  platformLink: GROQ_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.075,
    outputCost: 0.30
  }
}

const QWEN3_32B: LLM = {
  modelId: "qwen/qwen3-32b",
  modelName: "Qwen3 32B",
  provider: "groq",
  hostedId: "qwen/qwen3-32b",
  platformLink: GROQ_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.29,
    outputCost: 0.59
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  LLAMA_31_8B,
  LLAMA_33_70B,
  GPT_OSS_20B,
  QWEN3_32B
]