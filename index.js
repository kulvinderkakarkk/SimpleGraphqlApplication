const express = require('express')

const app=express()

app.get("/", (req,res) => {
    res.send("The application has started")
})

app.listen(8082, () => {console.log("Application running at 8082")})