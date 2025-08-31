import dotenv from "dotenv";
dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
  return value;
}

export const BOT_TOKEN = requireEnv("BOT_TOKEN");
export const GECKO_BASE_URL = requireEnv("GECKO_BASE_URL");
export const API_KEY = process.env.API_KEY;
