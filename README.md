<div align="center">
  <h1>🚀 Blog Backend API</h1>
  <p><strong>A robust, secure, and highly scalable RESTful API built for a modern blogging platform.</strong></p>

  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
</div>

---

## 📖 Overview
This project serves as the backend architecture for a blogging application. It provides secure user authentication, complete CRUD (Create, Read, Update, Delete) operations for blog posts, and utilizes a structured MVC (Model-View-Controller) design pattern to ensure clean, maintainable, and modular code.

## ✨ Key Features
* **User Authentication & Authorization:** Secure login and registration using JSON Web Tokens (JWT).
* **Data Security:** Passwords are encrypted and hashed using `bcrypt` before saving to the database.
* **RESTful Standards:** Clean and predictable API endpoints.
* **Modular Architecture:** Built heavily on the MVC pattern for clear separation of database schemas, business logic, and routing.
* **Development Friendly:** Configured with `nodemon` for automatic server restarts during development.

## 💻 Tech Stack
* **Runtime Environment:** Node.js
* **Web Framework:** Express.js (v5.2.1)
* **Database:** MongoDB
* **Object Data Modeling (ODM):** Mongoose (v9.3.0)
* **Authentication:** jsonwebtoken (v9.0.3)
* **Security:** bcrypt (v6.0.0)
* **Environment Configuration:** dotenv

## 📂 Project Architecture (MVC)
The codebase is structured to promote scalability and readability:

```text
blog-backend/
├── src/
│   ├── controllers/    # Business logic for handling incoming requests
│   ├── models/         # Mongoose schemas representing database collections
│   ├── routes/         # Express routers defining API endpoints
│   ├── middlewares/    # Custom middleware (e.g., verify JWT, error handling)
│   ├── utils/          # Helper functions and constants
│   └── server.js       # Main application entry point
├── .env                # Environment variables (Ignored by Git)
├── .gitignore          # Files to ignore in version control
├── package.json        # Project metadata and dependencies
└── package-lock.json   # Exact dependency tree
