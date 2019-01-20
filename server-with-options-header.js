/***********************************************************************
PUT/DELETEメソッドを使用するには

+ OPTIONSメソッドへのリクエストに対してレスポンスを返すようにする
+ OPTIONSメソッドへのリクエスト時に「Access-Control-Allow-Methods: PUT, DELETE」を指定する
**********************************************************************/
const express = require('express')
const app = express()

const appendCommonHeaders = (res) => {
    res.append(
        'Access-Control-Allow-Origin',
        '*'
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
