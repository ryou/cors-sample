/***********************************************************************
「Access-Control-Allow-Origin」を指定すると、基本的に「GET/POST」は通信出来るようになるが
「PUT/DELETE」はこのままでは通信できない
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

app.listen(9000)
