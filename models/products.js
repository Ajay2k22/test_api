import mongoose from "mongoose"


const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

export const Product=new mongoose.model("Products",schema)