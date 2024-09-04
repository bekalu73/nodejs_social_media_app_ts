// src/server.ts
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
// import userRoute from "./routes/users";
// import authRoute from "./routes/auth";
import postRoute from "./routes/postRoutes";

dotenv.config();

const app: Application = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Routes
// app.use("/api/users", userRoute);
// app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Backend server is ready @ http://localhost:${PORT}`);
});
