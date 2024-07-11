const express = require('express');
const {dbConnection} = require('./dbconnection/dbconnection');
const bodyParser = require('body-parser');
const port = 4001 ;
const cors = require('cors')
const signupRoute = require('./routes/signup')
const loginRoute = require('./routes/login')


const app = express();
app.use(bodyParser.json());
app.use(cors());

dbConnection();
app.use('/user',signupRoute)
app.use('/auth',loginRoute)

app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})


