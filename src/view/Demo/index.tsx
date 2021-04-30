import React, { ChangeEvent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { observer, inject } from "mobx-react/custom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { State } from "./index.interface";
import ChildThree from "./ChildThree";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import MobxTest from "./MobxTest";
import DragItem from "../../components/DragItem";
import styles from "./index.module.less";
import DemoComponent from "@/components/DemoComponent";
// import { taskList } from "@/api/demo";

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
      dragList: [
        {
          id: 1,
          name: "drag1",
        },
        {
          id: 2,
          name: "drag2",
        },
        {
          id: 3,
          name: "drag3",
        },
        {
          id: 4,
          name: "drag4",
        },
        {
          id: 5,
          name: "drag5",
        },
      ],
    };
  }

  componentDidMount() {
    // taskList({
    //   pageIndex: 1,
    //   pageSize: 20,
    // });
  }

  handleClick = () => {
    this.setState({
      name: "换名字了",
    });
  };

  handleLogin = () => {
    const { DemoStore } = this.props;
    DemoStore.setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTk2NzU4MTE2MSIsImNyZWF0ZWQiOjE1NzI0MTU0NDgyMjIsImV4cCI6MTU3MzAyMDI0OH0.jvjUnmxOf5OVBgaBHWAE02pvOTIJPGnaZfg54crwqddMiugugB8CiO7qehdHVZPuuxTutpL6wX6TOw6KgBVcXA"
    );
    DemoStore.getUserInfo();
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  // 拖拽改变位置
  changePosition = (originName: string, newIndex: number) => {
    console.log(newIndex);

    const { dragList } = this.state;
    const newList: any = [...dragList];
    let dragItemIndex = 0;
    newList.forEach((item: any, index: number) => {
      if (item.name === originName) {
        dragItemIndex = index;
      }
    });
    const deleteContent = newList.splice(dragItemIndex, 1);
    newList.splice(newIndex, 0, deleteContent[0]);
    this.setState({
      dragList: newList,
    });
  };

  render() {
    const { DemoStore } = this.props;
    const { resData } = DemoStore;
    const { name, value, dragList } = this.state;
    return (
      // !pending && (
      <>
        <DndProvider backend={HTML5Backend}>
          {dragList.map((item: any, index: number) => (
            <DragItem
              key={item.id}
              name={item.name}
              index={index}
              move={this.changePosition}
            />
          ))}
        </DndProvider>

        {/* <div className={styles.nameButton} onClick={this.handleLogin}>
          点我登录
        </div> */}
        <DemoComponent handleClick={() => {}} countDown={100} />
        <h1>mobile: {resData.mobile || "请登录"}</h1>
        <ul>
          <div className={styles.title}>子路由测试</div>
          <Link to="/demo/child_one">跳转子路由1</Link>
          <Link to="/demo/child_two">跳转子路由2</Link>
          <Link to="/demo/child_three">跳转子路由3</Link>
        </ul>
        <Switch>
          <Route path="/demo/child_one" component={ChildOne} />
          <Route path="/demo/child_two" component={ChildTwo} />
          <Route path="/demo/child_three" component={ChildThree} />
        </Switch>

        <ul>
          <div className={styles.title}>mobx测试</div>
          <Link to="/demo/mobx">mobx</Link>
        </ul>
        <Switch>
          <Route path="/demo/mobx" component={MobxTest} />
        </Switch>
        <span>我的名字是：{name}</span>
        <div className={styles.nameButton} onClick={this.handleClick}>
          点我换名字
        </div>
        <input value={value} onChange={this.handleChange} />
      </>
    );
    // );
  }
}

export default Demo;
