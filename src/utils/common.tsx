import qs from "qs";

// 获取url参数
export const getParmas = (search: string): object => {
  const params = qs.parse(search, { ignoreQueryPrefix: true });
  return params;
};
