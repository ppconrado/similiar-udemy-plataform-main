import { config } from 'dotenv';
import { app } from './server';
import MongoDBService from './services/MongoDBService';
import { AdminRepository } from './repositories/Admin';
// const cors = require('cors');
// app.use(cors());
config();
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI not found in environment variables');
}

const mongoDBService = new MongoDBService(mongoURI);

(async () => {
  try {
    await mongoDBService.connect();
    console.log('Connected to MongoDB 🍃');
    const adminRepository = new AdminRepository();
    adminRepository.createDefaultAdmin();
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log(`Server is running in port ${port} 🚀`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();
