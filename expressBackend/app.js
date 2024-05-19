import express from 'express'
import { getdata,createproperty } from './database.js'
const app =express()

app.get("/",(req,res)=>{
    res.send("this should br the property")
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("something went wrong")
})

app.listen(8080,()=>{
    console.log("server is running")
})
