import { axios_json } from "../utils/http";

export const testApi = () => {
  return axios_json({
    url: "/api/user/getUserById",
  });
};
export const taskList = (data: { pageIndex: number; pageSize: number }) => {
  return axios_json({
    url: "/ysf-activity/api/task/list",
    data,
  });
};
