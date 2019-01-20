/***********************************************************************
クッキーを使用したい場合は

+ Access-Control-Allow-Originに*（ワイルドカード）を使わない
+ 「Access-Control-Allow-Origin:true」を追加する

が必要となる
**********************************************************************/

const express = require('express')
const app = express()

const appendCommonHeaders = (res) => {
    res.append(
        'Access-Control-Allow-Origin',
        req.get('origin')
    )
    res.append(
        'Access-Control-Allow-Credentials',
        'true'
    )
}

app.get('/', (req, res) => {
    appendCommonHeaders(res)
    res.send('GET SUCCESS')
})

app.post('/', (req, res) => {
    appendCommonHeaders(res)
    res.send('POST SUCCESS')
})

app.put('/', (req, res) => {
    appendCommonHeaders(res)
    res.send('PUT SUCCESS')
})

app.delete('/', (req, res) => {
    appendCommonHeaders(res)
    res.send('DELETE SUCCESS')
})

app.options('/', (req, res) => {
    appendCommonHeaders(res)
    res.append(
        'Access-Control-Allow-Methods',
        'PUT, DELETE'
    )
    res.send('OPTIONS SUCCESS')
})

app.listen(9000)
