import { useState } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const useAxios = (axiosParams: AxiosRequestConfig, baseURL: string) => {
  axios.defaults.baseURL = baseURL;

  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(false);

  const fetchData = async (params: AxiosRequestConfig) => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err: AxiosError | any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  return { response, error, loading, sendData };
};

export default useAxios;
