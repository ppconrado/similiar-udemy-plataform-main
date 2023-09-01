import express from "express";
import { AuthController } from "../controllers/Student/AuthController";
import { authenticateUser } from "../middleware/auth";

const studentRoutes = express.Router();
const authController = new AuthController();

studentRoutes.post("/register", authController.register);
studentRoutes.post("/login", authController.login);

studentRoutes.put("/update", authenticateUser, authController.update);
studentRoutes.delete("/delete", authenticateUser, authController.delete);
studentRoutes.get("/about", authenticateUser, authController.about);

export { studentRoutes };
