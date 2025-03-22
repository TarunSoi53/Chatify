import mongoose from "../config/index.js";


const MessageSchema = new mongoose.Schema({
   senderId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
   },
   receiverId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
   },
   message:{
    type: String,
    required: true,
    minlength: 1,
   
   },
   createdAt: {
    type: Date,
    default: Date.now},

});

// MessageSchema.index({ senderId: 1, receiverId: 1 });
const Message = mongoose.model("Message", MessageSchema);
// In Message schema


export default Message;