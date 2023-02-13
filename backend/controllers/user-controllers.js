const bcrypt = require("bcrypt");

const HttpError = require("../models/http-error");
const User = require("../models/user-modal");

const signUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    const existingUser = await User.find({ email }).exec();
    if (existingUser.length !== 0) {
        const error = new HttpError(
            "User already exists with this email!!!",
            409
        );
        return next(error);
    }
    let hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = new User({ name, email, password: hashedPassword });
    createdUser.save();
    res.json({ message: "User account created.", data: { name, email } });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email }).exec();
    console.log(email);
    console.log(existingUser);
    if (!existingUser) {
        const error = new HttpError(
            "User does not exists with this email!!!",
            404
        );
        return next(error);
    }

    const result = await bcrypt.compare(password, existingUser.password);
    if (result) {
        res.json({ message: "Logged in" });
    } else {
        res.json({ message: "Password not correct" });
    }
};

exports.signUp = signUp;
exports.login = login;
