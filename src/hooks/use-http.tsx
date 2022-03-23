import { useState, useCallback } from "react";

export type RequestConfig = {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: {url: string; date: Date, tags?: string[]};
};

const useHttp = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig: RequestConfig, applyData: Function) => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err: any) {
      setError(err.message);
    }
    setisLoading(false);
    
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
