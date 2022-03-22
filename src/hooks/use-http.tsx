import { useState } from "react";

type RequestConfig = {
    url: string;
    method: string;
    headers: HeadersInit;
    body: BodyInit;
}

const useHttp = (requestConfig: RequestConfig, applyData: Function) => {
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)

const sendRequest = async () => {
    setisLoading(true);
    setError(null)
    try {
        const response = await fetch(requestConfig.url, {
            method: requestConfig.method,
            headers: requestConfig.headers,
            body: JSON.stringify(requestConfig.body)
        })

        if(!response.ok) {
            throw new Error('Request failed!')
        }

        const data = await response.json()
        applyData(data)
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
