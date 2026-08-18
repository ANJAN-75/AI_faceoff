import express from "express"

import rungraph from "./ai/graph.ai.js"
const app=express()
app.use(express.json())
app.get("/health",(req,res)=>{
    res.status(200).json({
        Message:"ok"
    })
})

app.get("/",async(req,res)=>{
    const result =await rungraph("Write an code for Factorial function in js")
    res.status(200).json(result)
})

export default app
