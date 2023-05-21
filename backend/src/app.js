import express from "express";
import cors from "cors";
import git_user_routes from "./routes/git_user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", git_user_routes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
