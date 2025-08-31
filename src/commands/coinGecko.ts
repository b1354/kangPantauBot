import { Context } from "telegraf";
import { Api } from "../../service";

const createReplyMessage = (
  coin: string,
  priceIdr?: number,
  priceUsd?: number
) => {
  const formattedUsd = priceUsd?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedIdr = priceIdr?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

   return `💰 *Harga \$${coin.toUpperCase()} Saat Ini*\n` +
         `───────────────\n` +
         `• USD: \`${formattedUsd}\`\n` +
         `• IDR: \`${formattedIdr}\`\n` +
         `───────────────`;
};

export default async (ctx: Context, text: string) => {
  if (ctx.message) {
    const match = text.match(/\$[A-Za-z0-9]+/);

    if (match) {
      const coin = match[0].slice(1).toLowerCase();
      const coinDetails: GRespSearch = await Api.coinGecko.search({ query: coin })

      if (coinDetails.coins[0]) {
        const symbol = coinDetails.coins[0]?.api_symbol
        const data = await Api.coinGecko.simplePrice({
          ids: symbol,
          vs_currencies: "usd,idr"
        })

        if (!data) return

        ctx.reply(createReplyMessage(
          symbol,
          data[symbol]?.idr,
          data[symbol]?.usd
        ), {
          parse_mode: "MarkdownV2"
        })
      }
    }
  }
}