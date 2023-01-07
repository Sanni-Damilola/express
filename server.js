const http = require('http')
const { readFileSync } = require('fs')

const home = readFileSync('./newp/newp.html')
const homecss = readFileSync('./newp/newp.css')
const homeimage1 = readFileSync('./newp/image-product-1.jpg')
const homeimage2 = readFileSync('./newp/image-product-2.jpg')
const homeimage3 = readFileSync('./newp/image-product-3.jpg')
const homeimage4 = readFileSync('./newp/image-product-4.jpg')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/' ) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(home)
        res.end()
    } else if (url === '/newp.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homecss)
        res.end()
    } else if (url === '/image-product-1.jpg') {
        res.writeHead(200, { 'content-type': 'text/jpg' })
        res.write(homeimage1)
        res.end() 
    } else if (url === '/image-product-2.jpg') {
        res.writeHead(200, { 'content-type': 'text/jpg' })
        res.write(homeimage2)
        res.end() 
    } else if (url === '/image-product-3.jpg') {
        res.writeHead(200, { 'content-type': 'text/jpg' })
        res.write(homeimage3)
        res.end() 
    } else if (url === '/image-product-4.jpg') {
        res.writeHead(200, { 'content-type': 'text/jpg' })
        res.write(homeimage4)
        res.end()         
    } else if (url === '/fgghwejk') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>wecccc</h1>')
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>not fou7nd</h1>')
        res.end()
    }
})

server.listen(2000, () => {
    console.log('i am done,please check the browser at port 2000');
})
