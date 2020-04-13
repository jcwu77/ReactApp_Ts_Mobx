import { axios_json } from "../utils/http";

export const testApi = () => {
  return axios_json({
    url: "/api/user/getUserById",
  });
};
