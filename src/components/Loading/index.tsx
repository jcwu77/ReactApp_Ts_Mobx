import React from "react";
import { observer } from "mobx-react/custom";
import styles from "./index.module.less";

const Loading = () => {
  return <div className={styles.container}>loading.....</div>;
};

export default observer(Loading);
