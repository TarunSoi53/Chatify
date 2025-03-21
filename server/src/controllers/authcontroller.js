import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = await User.findOne({ username: username });
 if(user){
    return res.status(400).json({ message: "Username already exists" });
 }
 else {

     user =await User.findOne({ email: email });
    if(user){
        return res.status(400).json({ message: "Email already exists" });
    }
    else {
        
        const salt = await bcrypt.genSalt(10);
       const  hashedPassword = await bcrypt.hash(password, salt);
        user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(200).json({ message: "User registered successfully",
            sucess: true 
         });
    }
 }



    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        
        const payload = {
            user: {
                id: user.id,
                username: user.username,
                   }
        };
        
        jwt.sign(payload, "secret", (err, token) => {
            if (err) throw err;
            res.json({ token,success: true });
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}
export { registerUser, loginUser };
