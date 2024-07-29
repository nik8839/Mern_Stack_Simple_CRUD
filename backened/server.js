
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
app.use(express.json())
const userRoute=require("./routes/userRoute")
const cors=require("cors")
app.use(cors())
mongoose.connect(process.env.URL).then(()=>{
    console.log("successfully connected")
    app.listen(process.env.PORT||8000,(err)=>{
        if(err) 
            console.log(err)
        console.log("running at ",process.env.PORT)
    })
}).catch((error)=>{
    console.log("error",error)
})
app.use(userRoute)




