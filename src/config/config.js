export default {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  dbUrl: process.env.DATABASE_URL
};
