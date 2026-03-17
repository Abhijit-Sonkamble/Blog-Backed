const mongoose = require("mongoose");

const URI = process.env.MONGO_LINK;


mongoose.connect(URI).then(()=>{
    console.log("Connected....")
}).catch((err)=>{
    console.log("Not Connected");
})