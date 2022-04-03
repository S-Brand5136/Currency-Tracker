import axios from "axios";

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

const baseUrl = "api.coincap.io/v2/";

export const fetchMarketData = async () => {
  const response = await axios.get<CurrentTrendData[]>(`${baseUrl}assets`);

  return response.data;
};
