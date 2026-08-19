import express from "express"
import cors from "cors"


import rungraph from "./ai/graph.ai.js"
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.get("/health",(req,res)=>{
    res.status(200).json({
        Message:"ok"
    })
})

app.get("/",async(req,res)=>{
    const result =await rungraph("Write an code for Factorial function in js")
    res.status(200).json(result)
})

app.post("/invoke",async(req,res)=>{
    const prompt=req.body

    const result=await rungraph(prompt.prompt)

    res.status(200).json({
        message:"AI models are return result",
        result,
        success:true
    })
})

export default app
