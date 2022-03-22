import { useState } from "react";

type RequestConfig = {
    url: string;
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
}

const useHttp = (requestConfig: RequestConfig, applyData: Function) => {
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)

const sendRequest = async () => {
    setisLoading(true);
    setError(null)
    try {
        const response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method :  'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        })

        if(!response.ok) {
            throw new Error('Request failed!')
        }

        const data = await response.json()
        applyData(data)
        setisLoading(false)
    }
    catch (err: any) {
        setError(err.message)
    }
}



  return {
      isLoading,
      error,
      sendRequest
  };
};

export default useHttp;
