export interface CurrentTrendData {
  id: string;
  symbol: string;
  rank: string;
  supply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwrap24Hr: string;
}

export interface CoinHistory {
  priceUsd: string;
  time: number;
}
