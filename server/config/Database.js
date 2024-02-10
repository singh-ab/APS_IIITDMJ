const mongoose = require("mongoose");
exports.connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(console.log('Database connected !'))
        .catch((e) => console.log(e));
}