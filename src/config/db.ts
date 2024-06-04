import mongoose from 'mongoose';
import config from './config';
import logger from '../utils/logger';

/**
 * Connects to the MongoDB database.
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
