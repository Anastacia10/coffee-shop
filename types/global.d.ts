export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      MONGODB_USERNAME: string;
      MONGODB_PASSWORD: string;
      MONGODB_DB_NAME: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_REGION: string;
      AWS_S3_HOSTNAME: string;
      NEXT_PUBLIC_URL: string;
      PORT: number;
      TZ?: string;
    }
  }
}
