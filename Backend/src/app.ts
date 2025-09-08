// Backend/src/app.ts
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import projectsRoutes from "./routes/projects";
import heroRoutes from "./routes/hero";
import codeRoutes from "./routes/codeblocks";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Security headers
app.use(helmet());

// CORS: restrict to FRONTEND_URL if provided, else allow localhost:8080 (vite default)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:8080";
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

// API routes
app.use("/api/projects", projectsRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/codeblocks", codeRoutes);

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

// Basic error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

export default app;