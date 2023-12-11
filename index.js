const express = require('express')//thư viện express ta mới cài
//express này vốn nằm trong folder node_modules
const app = express()//tạo function express để dùng luôn thôi
const port = 3000//run website ở cổng nào

app.get('/', (req, res) => {//get là định nghĩa tuyến đường route
    //trên đây vốn là một around function, vì bỏ function và thêm =>
    return res.send('Hello World!')//trả về trình duyệt Hello World
})

app.listen(port, () => {//port là 3000
  console.log(`Example app listening on port http://localhost:${port}`)
  //in ra app lắng nghe trên cổng 3000, khởi tạo từ express
  //tại trình duyệt mở lên http://localhost:3000
})