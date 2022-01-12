const express = require('express')

const bodyParser = require('body-parser')

const app = express();

const errorContoller = require('./Controller/error')

const studentsRoutes = require('./routes/students')

const port = process.env.port || 4000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    next();
})

app.use("/students", studentsRoutes)

app.use(errorContoller.get404);

app.use(errorContoller.get500);

app.listen(4000, () => {
    console.log(`listening the port ${port}`);
})


