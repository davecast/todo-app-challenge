import axios, { Method } from 'axios';

interface RequestConfig {
  method?: Method
  params?: object
  body?: object
  headers?: object
  mode?: string
  cache?: string
}

export default function request<Response = any>(
  url: string,
  config: RequestConfig = {
    method: 'GET',
    params: {},
    body: {},
    headers: {
      'Accept-Language': 'en-US,en;q=0.5',
    },
    mode: '',
    cache: '',
  }
) {
  return axios.request<Response>({
    ...config,
    data: config.body,
    url,
  });
}
