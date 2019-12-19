import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import qs from "qs";

const token: string = `Bearer ${localStorage.getItem("token")}` || "";
const server = axios.create();
// 根据环境获取不同的baseUrl
const origin: string = window.location.origin;
let baseUrl: string = origin;
if (origin.indexOf("localhost") > -1) {
  // baseUrl = origin;
} else if (origin.indexOf("xxxx") > -1) {
  // baseUrl = '';
} else if (origin.indexOf("xxxx") > -1) {
  // baseUrl = '';
}

// 全局默认设置
// axios.defaults.baseURL = baseUrl;
server.defaults.timeout = 4000; // 设置请求超时时间为4s
server.defaults.baseURL = baseUrl;

// 添加请求拦截器
server.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
server.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    switch (response.status) {
      case 200:
        break;
      case 401:
        // 未登录操作
        console.error(response.statusText);
        break;
      case 500:
        console.error(response.statusText);
        break;
      default:
        break;
    }
    return response;
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// contentType为json时的请求
const axios_json = <T,>(params: AxiosRequestConfig) => {
  let options: AxiosRequestConfig = {
    method: params.method || "get",
    url: params.url,
    headers: {
      Authorization: token,
    },
  };
  if (params.method === "get") {
    if (params.data) {
      options.params = params.data;
    }
  }

  return server(options).then(
    (response): ResponseData<T> => {
      switch (response.data.code) {
        case "OK":
          break;
        case "Unauthorized":
          // 未登录操作
          console.error(response.data.message);
          break;
        case "ServiceError":
          console.error(response.data.message);
          break;
        default:
          break;
      }
      return response.data;
    }
  );
};

// contentType为form-data时的请求
const axios_form = <T,>(params: AxiosRequestConfig) => {
  let options: AxiosRequestConfig = {
    method: params.method || "get",
    url: params.url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  };
  switch (params.method) {
    case "get":
      if (params.data) {
        options.params = params.data;
      }
      break;
    case "post":
      if (params.data) {
        options.data = qs.stringify(params.data);
      }
      break;
    default:
      break;
  }

  return server(options).then(
    (response): ResponseData<T> => {
      switch (response.data.code) {
        case "OK":
          break;
        case "Unauthorized":
          // 未登录操作
          console.error(response.data.message);
          break;
        case "ServiceError":
          console.error(response.data.message);
          break;
        default:
          break;
      }
      return response.data;
    }
  );
};

export { axios_form, axios_json };
