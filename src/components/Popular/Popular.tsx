import { PropsWithChildren } from "react";
import { ItemPropsType } from "../List/List";

export default function Popular(props: PropsWithChildren<ItemPropsType>) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}
