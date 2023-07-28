const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongo DB Database ${process.env.MONGO_URL}`.bgMagenta.white);
    } catch (error) {
        console.log(`Mongo DB Connection Error ${error}`.bgRed.white)
    }
};

module.exports = connectDB;



