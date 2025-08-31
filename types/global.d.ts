declare interface GSimplePriceParams {
  ids: string;
  vs_currencies: string;
  include_market_cap?: boolean;
  include_24hr_vol?: boolean;
  include_24hr_change?: boolean;
  include_last_updated_at?: boolean;
};

declare interface GSearch {
  query: string
}

declare interface GMarketsParams {
  vs_currency: string;
  ids?: string;
  category?: string;
  order?: string;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
  locale?: string;
};

declare interface GMarketChartParams {
  vs_currency: string;
  days: string | number;
  interval?: string;
};


declare interface GRespSimplePrice {
  [coinId: string]: {
    [curency: string]: number
  }
}

declare interface GRespSearch {
  coins: {
    id: string;
    name: string;
    api_symbol: string;
    symbol: string;
    market_cap_rank: number
  }[]
  exchange: [],
  icos: [],
  categories: [],
}