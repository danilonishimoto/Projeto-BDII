import type { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

type Props<T> = { 
	axiosInstance: AxiosInstance;
  url: string;
  method: Method;
  othersConfig?: AxiosRequestConfig;
	payload?: T | null,
};


export async function request<T>({
  axiosInstance,
  url,
  method,
  payload,
  othersConfig,
}: Props<T>) {
  try {
    const response = await axiosInstance.request<T>({
      url,
      method,
      data: payload,
      ...othersConfig,
    });

    return {
      data: response.data,
      error: null,
      success: true,
    };
  } catch (err) {
    return {
      data: null,
      error: axios.isAxiosError(err)
        ? err.message
        : "Erro inesperado.",
      success: false,
    };
  }
}

export default function useAxios<T>({ axiosInstance, url, method, othersConfig, payload }: Props<T>){
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	
	useEffect(() => {
		const fetchData = async() => {
			try {
				const res = await axiosInstance.request<T>({
          url,
          method,
					data: payload,
          ...othersConfig,
        });
				console.log(res.data)
				setData(res.data)
			} catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Erro inesperado.');
        }
      } finally {
        setLoading(false);
      }
		}
		
		fetchData();
	}, [])
	
	return {
  data,
  error,
  loading,
}
}