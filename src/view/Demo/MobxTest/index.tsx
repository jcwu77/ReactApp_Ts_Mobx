import * as React from "react";
import { observer, inject } from "mobx-react/custom";

import styles from "./index.module.less";
@inject("DemoStore")
@observer
class MobxTest extends React.Component<PageProps, {}> {
  handleAdd = () => {
    const { DemoStore } = this.props;
    DemoStore.addCount();
    // DemoStore.setToken();
  };

  handleDelete = () => {
    const { DemoStore } = this.props;
    DemoStore.deleteCount();
  };

  render() {
    const { DemoStore } = this.props;
    const { total, count } = DemoStore;
    console.log(count);
    console.log(total);
    return (
      <div className={styles.container}>
        <span onClick={this.handleAdd}>增加</span>
        {count}
        <span onClick={this.handleDelete}>减少</span>

        <div>单价： 112</div>
        <div>总价：{total}</div>
      </div>
    );
  }
}

export default MobxTest;
