import { Router } from 'express';
import { studentRoutes } from './student.routes';
import { instructorRoutes } from './instructor.routes';
import { adminRoutes } from './admin.routes';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');

const routes = Router();

routes.get('/', (req, res) => {
  res.send(
    '<h1>Udemy School API</h1><a href="/api/v1/docs">Swagger Documentation</a>'
  );
});
// routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
routes.use('/api/v1/student', studentRoutes);
routes.use('/api/v1/instructor', instructorRoutes);
routes.use('/api/v1/admin', adminRoutes);

export { routes };
