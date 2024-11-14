export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 3001,
  defaultLimit: process.env.DEFAULT_LIMIT || 10,
});
