import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ComponentProps } from "./index.interface";
import styles from "./index.module.less";

const DemoCommonComponent = ({
  handleClick = () => {},
  countDown = 0,
}: ComponentProps) => {
  const [count, setCount] = useState(0);
  let history = useHistory();
  let timer: any = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      let newCount = count - 1;
      setCount(newCount);
      if (count <= 0) {
        clearInterval(timer.current);
      }
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  });

  useEffect(() => {
    setCount(countDown);
  }, [countDown]);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timer.current);
    }
  });

  const handleGo = () => {
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <span onClick={handleClick}>增加</span>
      <span onClick={handleGo}>跳转</span>
      <span>倒计时：{count}</span>
    </div>
  );
};

export default DemoCommonComponent;
