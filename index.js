require('dotenv').config()
const express = require('express')

// console.log("Hello World to backend this series");
// import express from 'express'
// import express from 'express'- same work, different method

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('gauravver13')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello gaurav, Your workspace server</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<>Hitesh Choudhary and chai or code!</>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
