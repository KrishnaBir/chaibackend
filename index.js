require('dotenv').config()

console.log('chai aur code');

const express = require('express')
// console.log(express);
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Wforld!')
})

app.get('/twitter', (req, res) => {
  res.send('krishna_bir_')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>');
})

app.get('/youtube', (req, res)=>{
  res.send('<h2>chai aur code</hs>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})