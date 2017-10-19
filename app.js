const http = require('http')

let homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {padding: 0; margin: 0;}
        body{ padding: 30px 0; text-align: center; font-size: 16px; background: #333;}
        h1,h2{color: #fff;}
        nav{ margin-top: 20px;}
        ul, li{ list-style: none;}
        a{ color: #ccc; text-decoration: none;}
    </style>
</head>
<body>
    <h1>Nodejs</h1>
    <h2>项目部署上线示例</h2>
    <nav>
        <ul>
            <li>
                <a href="/move" target="_blank">Nodejs 电影网站</a>
            </li>
            <li>
                <a href="/blog" target="_blank">Nodejs Blog</a>
            </li>
            <li>
                <a href="/x" target="_blank">Nodejs xxxx</a>
            </li>
        </ul>
    </nav>
</body>
</html>
`

http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end(homePage)
}).listen(3000, () => {
    console.log('Server Runing At 3000');
})