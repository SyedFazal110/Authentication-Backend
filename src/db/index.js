import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Example route (you can add more routes as needed)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const loginUser = async (req , res) => {
  const { email , password } = req.body;

  if(!email) return res.status(400).json({ message : "Email required"})
  if(!password) return res.status(400).json({ message : "Password required"})
  
  // email ai ya nhe check kro

  const user = await User.findOne({ email });
  if(!user) return res.status(404).json({ message : "no user Found"})
}


export default connectDB