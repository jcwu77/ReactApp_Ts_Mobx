import { observable, action } from "mobx";

class CommonStore {
  @observable isLoading: boolean = false;

  @action showLoading = () => {
    this.isLoading = false;
  };

  @action hideLoading = () => {
    this.isLoading = true;
  };
}

export default new CommonStore();
