import 'dotenv/config';

export default {
  mongoURL:
    process.env.MONGO_URL || 'mongodb://localhost:27017/language-learning-app',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'd41d8cd98f00b204e9800998ecf8427e',
};
