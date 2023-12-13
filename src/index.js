const morgan = require('morgan');
const express = require('express');//thư viện express ta mới cài
//express này vốn nằm trong folder node_modules
const app = express();//tạo function express để dùng luôn
const { engine } =require('express-handlebars') ;
const path = require('path');
const port = 3000;//run website ở cổng nào
//Cấu hình ảnh logo
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
app.use(morgan('combined'));
//Template engine
//định nghĩa handlebars engine là function engine() 
app.engine('hbs', engine({
  extname: ".hbs"
}));
//khai báo view engine là handlebars engine định nghĩa ở trên
app.set('view engine', 'hbs');
//đường dẫn đến file home.handlebars. Trong nodejs sẽ có thư viện path
//quản lý các đường dẫn đến thư mục cần, dirname chứa đường dẫn đó
app.set('views', path.join(__dirname,'resources/views'));
app.get('/', (req, res) => {//get là định nghĩa tuyến đường route
    //trên đây vốn là một around function, vì bỏ function và thêm =>
    res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => //port là 3000
  console.log(`Example app listening on port http://localhost:${port}`)
  //in ra app lắng nghe trên cổng 3000, khởi tạo từ express
  //tại trình duyệt mở lên http://localhost:3000
)