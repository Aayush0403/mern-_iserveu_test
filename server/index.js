const express=require('express')
require('colors')
const cors= require('cors')
const app=express()

app.use(express.json())
app.use(cors())

app.get('/api/v1/get-info', (req,res)=>{
    res.send([
        {
            name:"aayush",
            dept:"observability"
        },
        {
            name : "subha",
            dept:"node.js"
        },
        {
            name: "rahul",
            dept:"angular.js"
        }
    ])
})

app.listen(5000 , ()=>{
    console.log("server is running at port 6000".bgCyan)
})