import { Component, FC, JSXElementConstructor } from "react";
import Popular from "../Popular/Popular";
import New from "../New/New";
import { ArticleBaseProps } from "../Article/Article";
import { VideoBaseProps } from "../Video/Video";

export type ItemPropsType = ArticleBaseProps | VideoBaseProps;

const updateComponent = (
  CallComponent: FC<ItemPropsType>
): JSXElementConstructor<ItemPropsType> =>
  class extends Component<ItemPropsType> {
    render() {
      const { views } = this.props;
      const Child = <CallComponent {...this.props} />;
      if (views > 1000) {
        return <Popular>{Child}</Popular>;
      } else if (views < 100) {
        return <New>{Child}</New>;
      }
      return Child;
    }
  };

export default updateComponent;
