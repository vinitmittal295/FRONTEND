const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:{
            type:string,
            require:true
        },
        email:{
            type:string,
            require:true,
            unique:true
        },



    }

)

module.exports=mongoose.model("user",userSchema)