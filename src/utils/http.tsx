import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Toast } from "antd-mobile";
import qs from "qs";

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
const axios_json = (params: AxiosRequestConfig) => {
  const token: string = `Bearer ${localStorage.getItem("token")}` || "";
  let options: AxiosRequestConfig = {
    method: params.method || "get",
    url: params.url,
    headers: {
      Authorization: token,
    },
  };
  if (params.data) {
    switch (params.method) {
      case "get":
        options.params = params.data;
        break;
      case "post":
        options.data = qs.stringify(params.data);
        break;
      default:
        options.params = params.data;
        break;
    }
  }

  return server(options).then(
    (response): ResponseData => {
      switch (response.data.code) {
        case "OK":
          break;
        case "Unauthorized":
          // 未登录操作
          Toast.info("请登录", 2);
          console.error(response.data.message);
          break;
        case "ServiceError":
          break;
        case "DuplicateSubmit":
          Toast.info(response.data.message, 2);
          break;
        default:
          options.params = params.data;
          break;
      }
      return response.data;
    }
  );
};

// contentType为form-data时的请求
const axios_form = (params: AxiosRequestConfig) => {
  const token: string = `Bearer ${localStorage.getItem("token")}` || "";
  let options: AxiosRequestConfig = {
    method: params.method || "get",
    url: params.url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  };
  if (params.data) {
    switch (params.method) {
      case "get":
        options.params = params.data;
        break;
      case "post":
        options.data = qs.stringify(params.data);
        break;
      default:
        options.params = params.data;
        break;
    }
  }

  return server(options).then(
    (response): ResponseData => {
      switch (response.data.code) {
        case "OK":
          break;
        case "Unauthorized":
          // 未登录操作
          console.error(response.data.message);
          break;
        case "ServiceError":
          break;
        case "DuplicateSubmit":
          Toast.info(response.data.message, 2);
          break;
        default:
          break;
      }
      return response.data;
    }
  );
};

export { axios_form, axios_json };
