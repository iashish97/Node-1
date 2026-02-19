import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started")
})
app.get("/",(req,res)=>{
    res.send("Server is running sucessfully")
})


app.listen(8080,()=>{
    console.log("Server running on port 8080")
})
