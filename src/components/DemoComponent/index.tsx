// import { SFC } from "react";
import React, { SFC } from "react";
import { ComponentProps } from "./index.interface";
import styles from "./index.module.less";

const DemoComponent: SFC<ComponentProps> = ({ handleClick }) => {
  return (
    <div className={styles.container}>
      <span onClick={handleClick}>增加</span>
    </div>
  );
};

export default DemoComponent;
