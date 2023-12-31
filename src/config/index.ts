import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.port,
  mongodb_uri: process.env.mongodb_uri,
  bcrypt_salt_step: process.env.bcrypt_salt_step,
};
