import { AxiosResponse } from "axios";
import { AxiosKey } from "@/constants/symbols";
import { injectStrict } from "@/helpers/injectStrict";

interface UseRequest {
  get: <T>(
    api: string,
    params?: Record<string, any>
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    api: string,
    body?: Record<string, any>
  ) => Promise<AxiosResponse<T>>;
}

export function useRequest(): UseRequest {
  const request = injectStrict(AxiosKey);

  return {
    get: <T>(api: string, params?: Record<string, any>) => {
      return request.get<T>(api, { params });
    },
    post: <T>(api: string, body?: Record<string, any>) => {
      return request.post<T>(api, body);
    },
  };
}
