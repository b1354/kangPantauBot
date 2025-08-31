import { Gecko } from "../config/api/gecko";


export const Api = {
  coinGecko: {
    simplePrice: (params: GSimplePriceParams) => Gecko.get<GRespSimplePrice>('/simple/price', params ),
    search: (params: GSearch) => Gecko.get<GRespSearch>('/search', params )
  }
}