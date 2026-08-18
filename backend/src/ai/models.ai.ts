import {config} from "../config/config.js"
import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"


export const GoogleModel=new ChatGoogle({
    model:"gemini-3.5-flash",
    apiKey:config.GOOGLE_API_KEY
})


export const MistralModel=new ChatMistralAI({
    model:"mistral-medium-latest",
    apiKey:config.MISTRAL_API_KEY
})

export const CohereModel=new ChatCohere({
    model:"command-r7b-12-2024",
    apiKey:config.COHERE_API_KEY
})
