const express = require('express')
const app = express()
const port = 8080
const connectDB= require('./config/db');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(bodyParser.json())


// const productController = require('./controller/productController')
// const categoryController = require('./controller/categoryController')
connectDB();
app.use(express.json())
const productRouter = require('./routes/productRoute')
app.use('/product',productRouter)

const categoryRouter = require('./routes/categoryRoute')
app.use('/category',categoryRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
