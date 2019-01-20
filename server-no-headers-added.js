/***********************************************************************
クロスオリジン通信時、「Access-Control-Allow-Origin」ヘッダーを追加していないと
全く通信が出来ない。
**********************************************************************/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('GET SUCCESS')
})

app.post('/', (req, res) => {
    res.send('POST SUCCESS')
})

app.put('/', (req, res) => {
    res.send('PUT SUCCESS')
})

app.delete('/', (req, res) => {
    res.send('DELETE SUCCESS')
})

app.listen(9000)
