import mongoose from "mongoose";

const {Schema} = mongoose;

const noteSchema = new Schema({
    title :String ,
    content : String ,
    tags:[{type:String}],
    createdAt:{type:Date , default :Date.now},

})

export const noteModel = mongoose.model('noteModel',noteSchema)