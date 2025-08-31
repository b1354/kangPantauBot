import { Telegraf } from "telegraf";
import dotenv from "dotenv";

import startCommand from "./commands/start";
import helpCommand from "./commands/help";
import { message } from "telegraf/filters";
import coinGecko from "./commands/coinGecko";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.start(startCommand);
bot.help(helpCommand);

bot.on(message("text"), async (ctx) => {
  const text = (ctx.message as any).text;
  if (text.includes("$")) {
    await coinGecko(ctx, text)
  }
});

bot.launch().then(() => {
  console.log("🤖 Bot is running...");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
