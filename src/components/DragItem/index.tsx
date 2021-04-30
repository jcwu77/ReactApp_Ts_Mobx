import React from "react";
import { ComponentProps } from "./index.interface";
import { DragSource, DropTarget } from "react-dnd";
import styles from "./index.module.less";

const DragItem = ({
  name = "",
  index = 0,
  connectDragSource = null,
  connectDropTarget = null,
  move = () => {},
}: ComponentProps) => {
  return connectDropTarget(
    connectDragSource(<div className={styles.container}>{name}</div>)
  );
};

const type = "item";

const dragSpec = {
  // 拖动开始时，返回描述 source 数据。后续通过 monitor.getItem() 获得
  beginDrag: (props: any) => {
    const { name, index } = props;
    return {
      name,
      originalIndex: index,
    };
  },
  canDrag() {
    // You can disallow drag based on props
    return true;
  },

  // 拖动停止时，处理 source 数据
  // endDrag(props, monitor) {
  // const { widgetCode: droppedId, originalIndex } = monitor.getItem();
  // console.log(monitor.getItem());
  // const didDrop = monitor.didDrop();
  // // source 是否已经放置在 target
  // if (!didDrop) {
  //   return props.move(droppedId, originalIndex);
  // }
  // return props.change(droppedId, originalIndex);
  // },
};

const dragCollect = (connect: any, monitor: any) => ({
  connectDragSource: connect.dragSource(), // 用于包装需要拖动的组件
  // connectDragPreview: connect.dragPreview(), //q 用于包装需要拖动跟随预览的组件
  isDragging: monitor.isDragging(), // 用于判断是否处于拖动状态
});

const dropSpec = {
  drop: (props: any) => {
    const { name } = props;
    return {
      name,
    };
  },
  hover(props: any, monitor: any) {
    if (props.name !== monitor.getItem().name) {
      props.move(monitor.getItem().name, props.index);
    } else {
      return;
    }

    // const { widgetCode: draggedId } = monitor.getItem();
    // const {
    //   item: { widgetCode: overId },
    //   move,
    // } = props;
    // if (!draggedId) {
    //   // add(widgetItem);
    //   return;
    // }

    // if (draggedId === overId) {
    //   return;
    // }
    // // 如果 source item 与 target item 不同，则交换位置并重新排序
    // const { index: overIndex } = props.find(overId);
    // move(draggedId, overIndex);
  },
};

const dropCollect = (connect: any) => ({
  connectDropTarget: connect.dropTarget(), // 用于包装需接收拖拽的组件
});

export default DropTarget(type, dropSpec, dropCollect)(
  DragSource(type, dragSpec, dragCollect)(DragItem)
);
