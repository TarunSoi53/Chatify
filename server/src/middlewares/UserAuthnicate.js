import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


const userAuthnicate = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params

    );
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token) return res.status(403).json({ message: 'Token not valid' });

      const verified = jwt.verify(token,"secret");
      
       
        console.log(verified);
        if (!verified) {
            return res.status(401).json({ msg: "authorization denied" });
        }
        req.user = verified.user.id;
        console.log(req.user);
        next();
        
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }
export {userAuthnicate}

