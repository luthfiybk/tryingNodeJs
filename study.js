const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Ini Dashboard')
})

app.get('/find', (req, res) => {
    const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "find name", res)
    })
})

app.get('/hello', (req, res) => {
    res.send('Hello')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('login berhasil')
})

app.put('/update', (req, res) => {
    console.log({ updateData: req.body })
    res.send('update berhasil')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
