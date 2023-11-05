import React, { ReactNode } from "react";
import { ItemPropsType, Popular, New } from "./App";

export const updateComponent = (Component: ReactNode) => {
  return class extends React.Component<{ props: ItemPropsType }> {
    render() {
      const { views } = this.props;
      const Child = <Component {...this.props} />;
      if (views > 1000) {
        return <Popular>{Child}</Popular>;
      } else if (views < 100) {
        return <New>{Child}</New>;
      }
      return Child;
    }
  };
};
