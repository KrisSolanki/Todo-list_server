import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    dueDate:{
        type:Date,
        default:null
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        default:null,
        ref: 'Category'
    }
    
});



const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const Task = mongoose.model('Task',taskSchema); 
export const Category = mongoose.model('Category', categorySchema);
