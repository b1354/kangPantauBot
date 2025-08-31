import { Context } from "telegraf";

export default (ctx: Context) => {
  if (ctx.message) {
    if ("text" in ctx.message) {
      const text = ctx.message.text.replace("/echo", "").trim();
      ctx.reply(text || "❗ Gunakan: /echo <teks>");
    }
  }
}