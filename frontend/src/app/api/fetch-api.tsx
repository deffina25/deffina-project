import axios, { type AxiosError } from 'axios';
import qs from 'qs';

type ApiError = {
  type: string;
  errors: { code: string; detail: string; attr: string | null }[];
};

type ApiResponse<T> = {
  result: T | null;
  error: ApiError | null;
};

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function fetchApi<T>(
  path: string,
  method: FetchMethod = 'GET',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any,
  withCredentials?: boolean,
  baseUrl?: string,
): Promise<ApiResponse<T>> {
  try {
    const response = await axios({
      baseURL:
        baseUrl || process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
      url: path,
      method,
      data: body || undefined,
      withCredentials: false,
      params,
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      },
    });

    return { result: response.data, error: null };
  } catch (error) {
    return {
      result: null,
      error: (error as AxiosError).response?.data as ApiError,
    };
  }
}
