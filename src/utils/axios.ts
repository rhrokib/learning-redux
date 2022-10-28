import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: `https://localhost:7023/api`,
});

// instance.interceptors.request.use(
//   (request: AxiosRequestConfig<any>) => {
//     const { token } = store.getState().auth;
//     axios.defaults.headers.common.ApiKey = "someKey";
//     if (token) {
//       request.headers = {
//         ...request.headers,
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.request.use((req: AxiosRequestConfig<any>) => {
  if (req.headers !== undefined) {
    req.headers.Auth = "Auth Key here";
  }
  return req;
});

export default instance;

 