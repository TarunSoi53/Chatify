import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authroute from "./routes/auth.route.js";
import ChatRoute from "./routes/chat.route.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use (bodyParser.json());

//routes 


app.use("/api/auth",authroute)
app.use("/api/chat",ChatRoute)



app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});

