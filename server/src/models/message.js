import mongoose from "../config/index.js";


const MessageSchema = new mongoose.Schema({
   senderid:{
    type: mongooose.Schema.Types.ObjectId, ref: 'User'
   },
   receiverid:{
    type: mongooose.Schema.Types.ObjectId, ref: 'User'
   },
   message:{
    type: String,
    required: true,
    minlength: 1,
   
   },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;