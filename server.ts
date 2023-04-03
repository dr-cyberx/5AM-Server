import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

import app from './src/app';
import { connectDB } from './src/db/connectDB';

const port = process.env.PORT || 4000;
const dbUri = process.env.DB_CONNECTION_STRING;

connectDB(dbUri)
  .then(() => {
    app.listen(port, () => {
      console.log('The server is up at http://localhost:', port);
    });
  })
  .catch(() => {
    console.log('Failed to connect to DB');
  });
