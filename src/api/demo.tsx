import { axios_json } from "../utils/http";
import { UserInfo } from "../view/Demo/index.interface";

export const testApi = () => {
  return axios_json<UserInfo>({
    url: "/api/user/getUserById",
  });
};
