# Vignaharta Usha — Backend API

Backend service for **Vignaharta Usha**, a full-stack real estate web application.  
Built using **Node.js, Express, and MongoDB**, this API handles authentication, admin operations, and dynamic content management.

---

## ✨ Features

- RESTful API using Express.js
- Admin Authentication (JWT-based)
- Secure password hashing (bcrypt)
- MongoDB database integration (Mongoose)
- CRUD operations for dynamic website content
- Environment-based configuration
- CORS enabled for frontend communication
- Deployed on Render

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- dotenv
- cors

---

## 📁 Project Structure

server/
controllers/
models/
routes/
middleware/
config/
utils/
server.js / app.js
package.json
.env


---

## ⚙️ Setup & Run Locally

### 1) Clone the repository

bash
git clone <your-backend-repo-link>
cd server
2) Install dependencies
npm install
3) Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4) Run the server
npm run dev
or

npm start
Server runs on:

http://localhost:5000
🔐 Authentication
Admin Login
POST /api/auth/login

Request Body:
{
  "email": "admin@example.com",
  "password": "yourpassword"
}
Response:
{
  "token": "JWT_TOKEN"
}
🔑 Token Usage
Include token in headers:

Authorization: Bearer <token>
Used for protected routes.

🛡 Middleware
Auth Middleware
Verifies JWT token

Protects admin routes

Rejects unauthorized access

Example usage:

router.post('/create', authMiddleware, createData)
📦 API Endpoints (Example)
Auth Routes
POST   /api/auth/login
Content Management (Admin Only)
GET    /api/content
POST   /api/content
PUT    /api/content/:id
DELETE /api/content/:id
Public Routes
GET /api/content   // Fetch data for frontend
🗄 Database
MongoDB Atlas used as cloud database

Mongoose used for schema modeling

Example model:

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
}, { timestamps: true });
🔒 Security
Passwords hashed using bcrypt

JWT authentication implemented

Protected admin routes

Environment variables used for secrets
