require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("Hello Irteza")
} )

app.get('/youtube', (req,res) => {
    res.send("Seekh Gaye ho")
})

app.get('/login', (req,res) => {
    res.send('<h1>PLEASE LOGIN AT AZORP CLOUD</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})