import express from"express"

import colors from"colors"
import dotenv from "dotenv"

// configure env
dotenv.config();

const PORT=process.env.PORT || 8080
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>welcome</h1>")
})



app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgGreen.white)
})