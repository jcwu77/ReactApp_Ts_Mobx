import React, { ChangeEvent } from "react";
import { observer, inject } from "mobx-react/custom";
import { State } from "./index.interface";
import Download from "nbugs-pc-downloadfile";
import ImagesUpload from "nbugs-images-upload";

@inject("DemoStore", "CommonStore")
@observer
class Demo extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      name: "1",
      age: 12,
      value: "",
      userInfo: {
        address: "",
        gender: "",
        nickName: "",
      },
      startDownload: false,
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState({
      startDownload: true,
    });
  };

  isFinish = (data: any) => {
    console.log(data);
  };

  handleLogin = () => {};

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  callback = () => {
    console.log(111);
  };

  render() {
    const { startDownload } = this.state;
    return (
      // !pending && (
      <>
        <span onClick={this.handleClick}>开始下载</span>
        <Download
          className="customer-class-name"
          groupIds={[
            "7ea5bb5adaaa4111be7eceda5d2c36bb",
            "61aeadf7a3074ed6bb9b59d4e401e525",
          ]}
          startDownload={startDownload}
          zipName="压缩包"
          isFinish={this.isFinish}
        />
        <ImagesUpload
          edit={0}
          type="pc"
          callback={this.callback}
          groupId="9dc8a86fac5d4e68ac905daf06a3f2c4"
        />
      </>
    );
    // );
  }
}

export default Demo;
