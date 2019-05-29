import mongoose from "mongoose";


export type TodoDocument = mongoose.Document & {
    name: string,
    completed: boolean,
    created_date: Date
};
const todoSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const Todo = mongoose.model<TodoDocument>("Todo", todoSchema);