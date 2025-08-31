import { Context } from "telegraf";

export default (ctx: Context) => {
  const message = `
ℹ️ *Panduan Bot Harga Crypto*

1️⃣ Untuk cek harga satu koin:
\`$COIN\`
Contoh: \`$BTC\`, \`$ETH\`

2️⃣ Untuk cek beberapa koin sekaligus:
\`$BTC $ETH $SOL\`

3️⃣ Harga akan ditampilkan dalam:
• USD (\`$USD\`)
• IDR (\`Rp\`)

4️⃣ Pastikan bot sudah diundang ke grup kamu dan privacy mode dimatikan jika ingin digunakan di grup.

⚡ Tips: Kamu bisa mengetik \$ diikuti kode koin untuk langsung melihat harga real-time
  `;

  ctx.reply(message, { parse_mode: "MarkdownV2" });
};
