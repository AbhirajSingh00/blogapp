// create user registration
exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validating the data
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please fill every field"
            })
        }

        // Existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: "User already exists"
            })
        }

        // Save new user
        const newUser = new userModel({ username, email, password });
        await username.save();
        return res.status(200).send({
            success: true,
            message: "New user created",
            username,
        });

    } catch (error) {
        console.log(`error occurred: ${error}`);
        return res.status(500).send({
            message: "Error in registering callback",
            success: false,
            error
        })
    }

};

// get all users
exports.getAllUsers = () => {

};

// user login 
exports.loginController = () => {

};

