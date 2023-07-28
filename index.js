const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// environment configurations
dotenv.config();

// importing routes
const userRoutes = require("./routes/userRoutes");

// Mongo DB Connection configurations
connectDB();

const app = express();

// middlewares (connect frontend with backend)
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 8080;

// listening the port
app.listen(8080, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} at port ${PORT}`.bgCyan.white);
});