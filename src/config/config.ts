import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/fintech',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  PORT: process.env.PORT || 3000,
};

export default config;
