import dotenv from 'dotenv';

dotenv.config();

const env = {
    SECRET_KEY: process.env.SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT
}

export default env;
