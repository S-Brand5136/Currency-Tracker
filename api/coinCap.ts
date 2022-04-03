import axios from "axios";

const baseUrl = "api.coincap.io/v2/";

export const fetchMarketData = async () => {
  const response = await axios.get<string>(`${baseUrl}assets`);

  return response.data;
};
