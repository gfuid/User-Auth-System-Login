user-auth-backend/
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── middlewares/
│   └── authMiddleware.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md

# 🛡️ User Authentication API

A secure authentication system built with Node.js, Express, MongoDB, JWT, and bcrypt.

## Features

- Register new users
- Login with hashed passwords
- Generate and verify JWT access & refresh tokens
- Protected routes with middleware

## Setup

1. Clone the repo
2. Run `npm install`
3. Add `.env` from `.env.example`
4. Run `npm start`

## Routes

| Method | Endpoint         | Description     |
|--------|------------------|-----------------|
| POST   | /api/auth/register | Register user   |
| POST   | /api/auth/login    | Login user      |

---
