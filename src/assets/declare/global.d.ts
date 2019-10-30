declare module "*.module.less";

declare interface PageProps {
  [propsName: string]: any;
}

declare interface ResponseData {
  code?: string;
  data?: any;
  message?: string;
  errorDetail?: string;
  path?: string;
  timestamp?: string;
}
