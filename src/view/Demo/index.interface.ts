export interface State {
  name: string;
  age: number;
  value: string;
  userInfo: UserInfo;
  startDownload: boolean;
}

export interface UserInfo {
  address: string;
  gender: string;
  nickName: string;
}

// export interface pageProps {
//   DemoStore?: any;
//   // [propName: string]: any;
// }
