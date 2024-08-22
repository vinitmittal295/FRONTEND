const express=require("express")
const mongoose=require("mongoose")
const app= express()
const port=3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongourl="mongodb://localhost:27017/crud"

mongoose.connect(mongourl).then(()=>{
    console.log('<<<<<<<connected to mongodb')
})


.catch((err)=>{
    console.log('error connecting to momgodb')
})

const userRoutes= require('./routers/user')

app.use('/users',userRoutes)
 
app.listen(port,()=>{
    console.log(`server on running on port ${port}`)
})