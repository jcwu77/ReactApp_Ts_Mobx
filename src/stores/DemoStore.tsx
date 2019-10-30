import { observable, action, reaction, computed, runInAction } from "mobx";
import { testApi } from "../api/demo";

class DemoStore {
  @observable count: number = 0;
  @observable token: string = "";
  @observable resData: ResponseData = {};
  @observable pending: boolean = true;

  @computed get total() {
    return 112 * this.count;
  }

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
      }
    );
  }

  @action getUserInfo = async () => {
    try {
      const res: ResponseData = await testApi(); // 用 yield 代替 await
      runInAction(() => {
        this.resData = res.data;
        this.pending = false;
      });
    } catch (error) {
      runInAction(() => {
        this.resData = {};
      });
    }
  };

  @action addCount = () => {
    this.count++;
  };

  @action deleteCount = () => {
    this.count--;
  };

  @action setToken(token: string) {
    this.token = token;
  }
}

export default new DemoStore();
