# Nord

## 🛍️ E-Commerce Website

This is an **e-commerce** website built with **React, Redux, and Vite**. The project provides an intuitive shopping experience with authentication, product browsing, and a secure checkout process.

## 🚀 Tech Stack

- **Frontend:** React 19, Redux, React Router DOM
- **UI Library:** MUI (Material UI), Bootstrap, Styled Components
- **State Management:** Redux, Redux Thunk
- **HTTP Requests:** Axios
- **Routing:** React Router v7
- **Carousel & UI Effects:** Swiper, Slick Carousel, Glider.js

---

## 📂 Project Structure

```
Nord/
│── src/
│   ├── Components/
│   │   ├── Flash/       # Flash sale components (Men, Women, Kids, etc.)
│   │   ├── Navbar/      # Navigation components (SignIn, Create Account, etc.)
│   │   ├── InnerPages/  # Product, Checkout, Payment pages
│   │   ├── Home/        # Home page sections (Main, Description, etc.)
│   │   ├── Footer/      # Footer component
│   │   ├── Gift/        # Gift section component
│   ├── Routes/
│   │   ├── MainRoutes.js  # All application routes
│   │   ├── RequiredAuth.js # Protected route wrapper
│   ├── App.js  # Main React App component
│   ├── main.jsx  # React entry point
│── public/  # Static assets
│── package.json  # Dependencies and scripts
│── vite.config.js  # Vite configuration
```

---

## 🎯 Features

✅ **User Authentication:** Register, Sign In, Protected Routes 🛡️  
✅ **Product Listings:** Browse products across various categories 🛍️  
✅ **Cart Management:** Add, Remove, and Checkout products 🛒  
✅ **Wishlist & Purchase History:** Save favorite products ❤️  
✅ **Secure Payments:** Integrated payment page 💳  
✅ **Fast & Optimized:** Built using **Vite** for a fast development experience ⚡  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/your-username/nord.git
$ cd nord
```

### 2️⃣ Install Dependencies
```sh
$ npm install
```

### 3️⃣ Start Development Server
```sh
$ npm run dev
```

### 4️⃣ Build for Production
```sh
$ npm run build
```

### 5️⃣ Preview Production Build
```sh
$ npm run preview
```

---

## 📜 Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run lint` | Lint the codebase with ESLint |
| `npm run preview` | Preview the production build |

---

## 🔗 Dependencies

| Package | Version |
|---------|---------|
| React | 19.0.0 |
| React Router DOM | 7.4.0 |
| Redux | 5.0.1 |
| Redux Thunk | 3.1.0 |
| MUI (Material UI) | 7.0.0 |
| Styled Components | 6.1.16 |
| Axios | 1.8.4 |
| React Bootstrap | 2.10.9 |
| Swiper | 11.2.6 |
| Slick Carousel | 1.8.1 |
| Glider.js | 1.7.9 |

---

## 🏗️ Future Improvements

- ✅ **Backend Integration** (Authentication, Database, API Calls)
- ✅ **Search & Filters** for better product discovery
- ✅ **Admin Dashboard** for product management

---

## 👨‍💻 Contributing
Pull requests are welcome! If you'd like to contribute, follow these steps:

1️⃣ Fork the repository  
2️⃣ Create a new branch (`git checkout -b feature-name`)  
3️⃣ Commit your changes (`git commit -m "Added new feature"`)  
4️⃣ Push to the branch (`git push origin feature-name`)  
5️⃣ Open a Pull Request 🎉  

---

## 📞 Contact
If you have any questions, feel free to reach out:
📧 **Email:** panditabhishek9651@gmail.com  

---



# Nord - MERN Authentication Project

## 📌 Project Description
Nord is a **MERN stack authentication system** that provides user registration, login, and profile management using JWT authentication and secure password hashing.

## 🚀 Features
- User Registration & Login
- Secure Password Hashing (bcrypt.js)
- JWT Authentication
- Protected Routes Middleware
- CORS Enabled API

---

## 📂 Project Structure
```
Nord/
│-- backend/
│   ├── config/
│   │   ├── db.js
│   ├── models/
│   │   ├── user.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── router/
│   │   ├── authRouter.js
│   ├── server.js
│-- frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   ├── package.json
```

---

## 🏗️ Backend Setup
### 1️⃣ Install Dependencies
```sh
cd backend
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
```

### 2️⃣ Configure Environment Variables
Create a `.env` file in the backend folder and set the values:
```
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 3️⃣ Start the Server
```sh
npm start
```

---


### 📌 server.js
```javascript
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const MongoDB = require("./config/db");
const authRouter = require("./router/authRouter");

const app = express();
app.use(express.json());

// 🛑 CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true, // Allow authentication headers & cookies
  })
);

// 🛑 Manually setting CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// ✅ Use Router
app.use("/auth", authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  MongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 📌 authRouter.js
```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/user");
const { authMiddleware } = require("../middleware/authMiddleware");
const authRouter = express.Router();

// 📝 User Registration
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

// 🔑 User Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: "Invalid email or password!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, error: "Invalid email or password!" });

    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    user.password = undefined;
    res.json({ success: true, token, name: user.name });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, error: "Server error! Please try again later." });
  }
});

// 🔒 Get User Profile (Protected Route)
authRouter.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = authRouter;
```

---

## 🎨 Frontend Setup (React + Vite)
### 1️⃣ Install Dependencies
```sh
cd frontend
npm install axios react-router-dom
```

### 2️⃣ Start the React App
```sh
npm run dev
```

---

## 🛠️ API Routes
| Endpoint       | Method | Description        |
|--------------|--------|------------------|
| `/auth/register` | `POST` | User Registration |
| `/auth/login` | `POST` | User Login |
| `/auth/profile` | `GET` | Get User Profile (Protected) |

---

## 🔐 Authentication Flow
1️⃣ User registers → Backend hashes password & stores user.  
2️⃣ User logs in → Backend validates credentials, generates JWT.  
3️⃣ User accesses protected routes → JWT is verified using middleware.  

---

## 📜 License
This project is open-source and free to use.

---