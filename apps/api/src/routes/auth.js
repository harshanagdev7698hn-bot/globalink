// src/routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Common function to create JWT and cookie
function setAuthCookie(res, user) {
  const token = jwt.sign(
    {
      userId: user._id.toString(),
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // localhost ke liye false; production me true + HTTPS
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
}

// 🔹 Signup ( /auth/signup OR /auth/register )
async function signupHandler(req, res) {
  try {
    const { fullName, email, password, role, country } = req.body;

    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Full name, email and password required" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email: email.toLowerCase(),
      passwordHash,
      role: role || "buyer",
      country: country || "",
    });

    setAuthCookie(res, user);

    return res.status(201).json({
      message: "Account created",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        country: user.country,
      },
    });
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Signup failed" });
  }
}

// 🔹 Login ( /auth/login )
async function loginHandler(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    setAuthCookie(res, user);

    return res.json({
      message: "Signed in",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        country: user.country,
      },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: "Login failed" });
  }
}

// 🔹 Current user ( /auth/me )
router.get("/me", authMiddleware, async (req, res) => {
  res.json({ user: req.user });
});

// Routes
router.post("/signup", signupHandler);
router.post("/register", signupHandler); // in case frontend /auth/register call kare
router.post("/login", loginHandler);

// 🔹 Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
