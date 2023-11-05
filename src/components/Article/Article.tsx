import { ItemBaseProps } from "../../App";

export type ArticleBaseProps = ItemBaseProps & { title: string };

export default function Article(props: ArticleBaseProps) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}
