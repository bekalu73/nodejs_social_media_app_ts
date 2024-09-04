"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
// import userRoute from "./routes/users";
// import authRoute from "./routes/auth";
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to Database
(0, db_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)());
// Routes
// app.use("/api/users", userRoute);
// app.use("/api/auth", authRoute);
app.use("/api/posts", postRoutes_1.default);
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Backend server is ready @ http://localhost:${PORT}`);
});
