const express = require('express')
const path = require('path')
const app = express()


// app.use(express.static('./newp1'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './newp/newp.html'))
})







app.listen(1003, () => {
    console.log('done');
})
