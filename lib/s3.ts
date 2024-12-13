import { S3Client } from "@aws-sdk/client-s3";

if (!process.env.AWS_REGION)
  throw new Error("Please define AWS_REGION in .env");
if (!process.env.AWS_ACCESS_KEY_ID)
  throw new Error("Please define AWS_ACCESS_KEY_ID in .env");
if (!process.env.AWS_SECRET_ACCESS_KEY)
  throw new Error("Please define AWS_SECRET_ACCESS_KEY in .env");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default s3Client;
