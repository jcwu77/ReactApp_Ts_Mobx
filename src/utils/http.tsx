import axios, { AxiosRequestConfig } from "axios";
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
  config => {
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
  response => {
    // 对响应数据做点什么
    switch (response.data.code) {
      case "OK":
        return response.data;
      case "Unauthorized":
        // 未登录操作
        break;
      case "ServiceError":
        return response.data;
      default:
        return response.data;
    }
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// contentType为form-data时的请求
const axios_form = (params: AxiosRequestConfig) => {
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

  return server(options);
};

// contentType为json时的请求
const axios_json = (params: AxiosRequestConfig) => {
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

  return server(options);
};

export { axios_form, axios_json };
