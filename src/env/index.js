import { config } from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
  config();
}

export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    LOGIN_URL: process.env.LOGIN_URL || 'http://localhost:2424/login',
}