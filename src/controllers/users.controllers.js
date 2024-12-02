import user from "../models/users.models.js"
// import { jwt } from "jsonwebtoken";


// const generateAccessToken = (user) => {
//     return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, { expiresIn: '6h' });
// }
// const generateRefreshToken = (user) => {
//     return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, { expiresIn: '7d' });
// }


// register user
const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await user.findOne({ email: email })
    if (user) return res.status(401).json({
        message: "user already exists"
    })
    const createUser = await user.create({
        email, password,
    })
    res.json({
        message: "user registered successfully",
        data: createUser
    })
}

export default registerUser