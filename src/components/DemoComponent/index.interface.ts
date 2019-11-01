import { MouseEvent } from "react";
export interface ComponentProps {
  handleClick(event: MouseEvent<HTMLDivElement>): void;
}
