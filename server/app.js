const express = require("express");
const app = express();
const cors = require("cors");
const { isSuperuser } = require("./middleware/isSuperuser");
require("dotenv").config({path:"./config/.env"});


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());


const userrouter = require("./routes/user_route");
const superuserrouter = require("./routes/superuser_route");


app.use('/user' , userrouter);
app.use('/superuser' , isSuperuser , superuserrouter);


module.exports = app;