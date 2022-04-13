export interface CurrentTrendData {
  id: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
}

export interface CoinHistory {
  priceUsd: string;
  time: number;
}
