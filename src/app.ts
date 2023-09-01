import { config } from "dotenv";
import { app } from "./server";
import MongoDBService from "./services/MongoDBService";
import { AdminRepository } from "./repositories/Admin";

config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MONGO_URI not found in environment variables");
}

const mongoDBService = new MongoDBService(mongoURI);

(async () => {
  try {
    await mongoDBService.connect();
    console.log("Connected to MongoDB 🍃");
    const adminRepository = new AdminRepository();
    adminRepository.createDefaultAdmin();
    app.listen(3000, () => console.log(`Server is running in port 3000 🚀`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
