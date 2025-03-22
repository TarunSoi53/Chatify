import User from '../models/user.js';
import Message from '../models/message.js';
import mongoose from 'mongoose';

const getUserList = (req, res) => {
    console.log('getUser', req.user);
}
const getMessages = async (req,res) => {
    try {
        const senderId = req.user;
const receiverId = req.params.receiverId;

        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        }).sort({ createdAt: 1 });
        res.json(messages);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}
const sendMessage = async (req, res) => {
    try {
        const message = req.body.message;
        const senderId = req.user;
        const receiverId = req.params.receiverId;
        console.log('sendMessage', req.user)
        const newMessage = new Message({ message, senderId, receiverId });
        await newMessage.save();
        res.json(newMessage);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}
// export default { registerUser, loginUser };
export { getUserList, getMessages, sendMessage };
