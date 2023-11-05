import { PropsWithChildren } from "react";
import { ItemPropsType } from "../List/List";

export default function New(props: PropsWithChildren<ItemPropsType>) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}
