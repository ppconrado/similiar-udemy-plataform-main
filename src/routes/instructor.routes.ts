import express from "express";
import { AuthController } from "../controllers/Instructor/AuthController";
import { authenticateUser } from "../middleware/auth";

const instructorRoutes = express.Router();
const authController = new AuthController();

instructorRoutes.post("/register", authController.register);
instructorRoutes.post("/login", authController.login);

instructorRoutes.put("/update", authenticateUser, authController.update);
instructorRoutes.delete("/delete", authenticateUser, authController.delete);

export { instructorRoutes };
