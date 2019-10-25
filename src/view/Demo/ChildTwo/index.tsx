import * as React from "react";
import styles from "./index.module.less";

class ChildTwo extends React.Component {
  render() {
    return <div className={styles.container}>我是子路由2</div>;
  }
}

export default ChildTwo;
