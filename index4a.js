import express from 'express'
const app=express()

app.get("/:a/:b",(req,res)=>{
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    
    res.send((a+b).toString())
})

app.listen(8080,()=>{
    console.log("Server is running")
})