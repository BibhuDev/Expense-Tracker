import mongoose from "mongoose";

const expenseSchema= new mongoose.Schema({
    "user": {
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    "amount": Number,
    "category": String,
    "description": String,
    "date": {
        type: Date, default: Date.now
    },
});

export default mongoose.model('expense', expenseSchema);
