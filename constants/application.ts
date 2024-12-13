if (!process.env.MONGODB_USERNAME)
  throw new Error("Please define MONGODB_USERNAME in .env");
if (!process.env.MONGODB_PASSWORD)
  throw new Error("Please define MONGODB_PASSWORD in .env");
if (!process.env.MONGODB_DB_NAME)
  throw new Error("Please define MONGODB_DB_NAME in .env");
if (!process.env.AWS_S3_HOSTNAME)
  throw new Error("Please define AWS_S3_HOSTNAME in .env");

export const MONGO_DB_CONNECTION = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@coffeshop.rzjf8.mongodb.net/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority&appName=CoffeShop`;
export const AWS_S3_URL = `https://${process.env.AWS_S3_HOSTNAME}/`;
