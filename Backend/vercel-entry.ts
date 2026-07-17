import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { connectDB } from './config/db';

// DB connection
await connectDB();

// Export the Express app for Vercel
export default app;
