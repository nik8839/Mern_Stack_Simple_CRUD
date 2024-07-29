 const mongoose=require("mongoose")
const User=require("../models/userModel")
const express =require("express")
const router=express.Router()
router.get("/", async(req,res)=>{
    try{   
       // console.log("atleast hitting")
        const showAll=await User.find()
        res.status(200).json(showAll)
    
        }catch(error)
        {
            console.log(error)
            res.status(400).json({error:error.message})   
        }

   

})
// get by id
router.get("/:id",async (req,res)=>{
    try{   
        const {id}=req.params
        const singleUser=await User.findById({_id:id})
        
        res.status(200).json(singleUser)
    
        }catch(error)
        {
            console.log(error)
            res.status(400).json({error:error.message})
    
        }

    // res.send(" all data got")

})

// delte
router.delete("/:id",async (req,res)=>{
    try{   
        const {id}=req.params
        const singleUser=await User.findByIdAndDelete({_id:id})
        
        res.status(200).json(singleUser)
    
        }catch(error)
        {
            console.log(error)
            res.status(400).json({error:error.message})
    
        }

    // res.send(" all data got")

})

// update
router.patch("/:id",async (req,res)=>{
    try{   
        const {id}=req.params
        const {name,email,age}=req.body
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        
        res.status(200).json(updateUser)
    
        }catch(error)
        {
            console.log(error)
            res.status(400).json({error:error.message})
    
        }

    // res.send(" all data got")

})
router.post("/",async (req,res)=>{
    const {name,email,Age}=req.body;
  // const User=require("./models/userModel")
    try{   
    const UserAdded= await User.create(
        {
            name:name,
            email:email,
            Age:Age,
        }
    )
    res.status(201).json(UserAdded)

    }catch(error)
    {
        console.log(error)
        res.status(400).json({error:error.message})

    }
    
})
module.exports=router



