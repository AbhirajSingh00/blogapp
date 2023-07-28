const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: email,
        required: [true, 'email is required']
    },
    password: {
        type: password,
        required: [true, 'password is required']
    }
}, { timestamps: true })
// timestamps tell the time when the user is created

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;