import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import axios from 'axios';
import { userRouter } from "./routes/users.js";
import { newsRouter } from "./routes/news.js";


const app = express();

app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000/"]
}));

app.use("/auth", userRouter);
app.use("/news", newsRouter);

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

mongoose.connect(
    "mongodb+srv://anandkomati12:anand303@news.9swoqj2.mongodb.net/news?retryWrites=true&w=majority",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));


app.listen(3001, () => console.log("SERVER STARTED!"));