const express  =  require("express")

const colors= require("colors")

const app=express()

app.get('/',(req,res)=>{
    res.send({
        message:"welcome to ecommerce app"
    })
})

const PORT=8080

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgGreen.white)
})