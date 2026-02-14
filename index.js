const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contentRoutes = require("./routes/contentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://vignaharta-usha.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow non-browser tools (like Postman) with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS: " + origin));
    },
    credentials: true
  })
);


app.get("/", (req, res) => res.send("✅ API Running"));

app.use("/api/content", contentRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});
