const express = require('express')
const app = express()
const port = 3000

app.get('/index-tintuc', (req, res) => {
    res.send('Hello World!zdfa')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})