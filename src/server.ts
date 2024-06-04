/**
 * Starts the server by connecting to the database and listening on the specified port.
 */
import app from './app';
import config from './config/config';
import connectDB from './config/db';
import logger from './utils/logger';

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Start the Express server
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    logger.error(`Error starting server: ${(error as Error).message}`);
    process.exit(1);
  }
};

startServer();
