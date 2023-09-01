import { Router } from "express";
import { studentRoutes } from "./student.routes";
import { instructorRoutes } from "./instructor.routes";
import { adminRoutes } from "./admin.routes";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

const routes = Router();

routes.use("/api/v1/student", studentRoutes);
routes.use("/api/v1/instructor", instructorRoutes);
routes.use("/api/v1/admin", adminRoutes);
routes.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export { routes };
