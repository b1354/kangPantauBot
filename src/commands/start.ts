import { Context } from "telegraf";

export default (ctx: Context) => {
  const message = `
👋 Halo *${ctx.from?.first_name ?? "teman"}*!

Aku adalah bot harga crypto. Kamu bisa:

• Cek harga koin langsung di chat dengan format: \`$BTC\`, \`$ETH\`, \`$SOL\`
• Bisa juga beberapa koin sekaligus: \`$BTC $ETH $SOL\`

💡 Contoh:
\`$BTC\` → Menampilkan harga Bitcoin
\`$ETH\` → Menampilkan harga Ethereum

Ketik /help untuk melihat panduan lengkap
  `;

  ctx.reply(message, { parse_mode: "MarkdownV2" });
};
