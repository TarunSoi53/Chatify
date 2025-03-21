import User from '../models/user.js';
import Message from '../models/message.js';
import mongoose from 'mongoose';

const getUser = (req, res) => {
    User.findById(req.user._id)
     