import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import startCommand from "../../commands/start";
import helpCommand from "../../commands/help";
import { message } from "telegraf/filters";
import coinGecko from "../../commands/coinGecko";

dotenv.config();
const token = process.env.BOT_TOKEN;
if (!token) throw new Error("❌ BOT_TOKEN belum di-set!");

// init bot & handler sekali saja
const bot = new Telegraf(token);
bot.start(startCommand);
bot.help(helpCommand);
bot.on(message("text"), async ctx => {
  const text = (ctx.message as any).text;
  if (text.includes("$")) await coinGecko(ctx, text);
});

export const handler = async (event: any) => {
  // Telegram selalu kirim POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "👋 Tekan POST untuk Webhook" };
  }
  try {
    const update = JSON.parse(event.body);
    await bot.handleUpdate(update);
    return { statusCode: 200, body: "" };
  } catch (err) {
    console.error("⚠️ webhook error:", err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
