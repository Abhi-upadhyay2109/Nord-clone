# Nord
Websiste Link - https://nordstr10.netlify.app/
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
