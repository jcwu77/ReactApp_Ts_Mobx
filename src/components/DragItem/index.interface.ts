export interface ComponentProps {
  // handleClick(): void;
  name: string;
  index: number;
  connectDragSource: any;
  connectDropTarget: any;
  move(originName: string, newIndex: number): void;
}
