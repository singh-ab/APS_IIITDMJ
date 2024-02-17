const app= require("./app");
const { connectDB } = require("./config/database");


connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port : ${process.env.PORT}`);
})