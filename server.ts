import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

import app from './src/app';

const port = Boolean(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log('The server is up at http://localhost:4000');
});
