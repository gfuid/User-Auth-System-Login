import { User } from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.status(201).json({ user, accessToken, refreshToken });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) throw new Error("Invalid email or password");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.json({ user, accessToken, refreshToken });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
