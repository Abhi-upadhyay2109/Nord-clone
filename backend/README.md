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
