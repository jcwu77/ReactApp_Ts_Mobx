declare module "*.module.less";
declare module "*.png";

declare interface PageProps {
  [propsName: string]: any;
}

declare interface ResponseData<T = any> {
  code: string;
  data: T;
  message: string;
  errorDetail?: string;
  path?: string;
  timestamp?: string;
}
