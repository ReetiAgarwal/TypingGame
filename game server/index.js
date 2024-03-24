const express = require("express")
const cors=require('cors')
const app=express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const authRoute = require("./Routes/auth")
const scoreRoute = require("./Routes/scores")

dotenv.config();
// mongoose.connect('mongodb://localhost:27017/typing',{useNewUrlParser:true});
mongoose.connect(process.env.MONGO_URL);

// app.get("/",(req,res)=>{
//     res.send("HELLO server");
// });

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth",authRoute);
app.use("/api/scores",scoreRoute);

app.listen(5000,()=>{
    console.log("app is listening on port 5000");
});




// const express = require("express");
// const mongoDB = require("./db");
// const cors=require('cors');
// const port=5000;
// mongoDB();
// const app=express();
// // app.use((req,res,next)=>{
// //     res.setHeader("Acess-Control-Allow-Origin","http://localhost:3000");
// //     res.header(
// //         "Access-Control-Allow-Headers",
// //         "Origin, X-Requested-With, Content-Type, Accept" 
// //     );
// //     next();
// // })
// app.get("/",(req,res)=>{
//     res.send("HELLO server");
// });

// app.use(cors());
// app.use(express.json());
// app.use("/api",require("./Routes/CreateUser"));
// app.use("/api",require("./Routes/DisplayData"));
// app.listen(port,()=>{
//     console.log("app is listening on port "+port);
// });
