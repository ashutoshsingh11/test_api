import express from "express"

const app  = express()

app.listen(5001,() => console.log('Api is Running  '))

app.get('/',(req,res) => res.json('My Api running at 5001 Miau Miau') )
