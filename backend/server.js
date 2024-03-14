const express = require('express');
const cors = require('cors');
const pool = require('./db');
const customerroute=require('./routes/customerroute')
const app=express();
app.use(express.json());

app.use(cors())
app.use('/api/v1/customer',customerroute);

app.listen(4000,()=>{
    console.log("Server runs on 4000")
})