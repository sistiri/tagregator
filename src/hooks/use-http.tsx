import { useState, useCallback, useMemo } from "react";

export type RequestConfig = {
  url: string;
  // signal: AbortSignal;
  method?: string;
  headers?: HeadersInit;
  body?: {url: string; date: Date, tags?: string[]};
};

const useHttp = () => {

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
 
  // const abortController = useMemo(() => new AbortController(), []);
  const sendRequest = useCallback(async (requestConfig: RequestConfig, applyData: Function) => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        // signal: requestConfig.signal,
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
      if(err.name === 'AbortError'){
        console.log('fetch aborted')
      } else {
        setError(err.message)
      }
      }
    
    setisLoading(false);
    // return () => abortController.abort()
  }, []);

  return {
    // abortController,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
