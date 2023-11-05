import Article, { ArticleBaseProps } from "../Article/Article";
import updateComponent from "../UpdateComponent/UpdateComponent";
import Video, { VideoBaseProps } from "../Video/Video";

export type ItemPropsType = ArticleBaseProps | VideoBaseProps;
export type ListPropsType = ItemPropsType[];

const UpdatedVideo = updateComponent(Video);
const UpdatedArticle = updateComponent(Article);

export default function List(props: { list: ListPropsType }) {
  return props.list.map((item, id) => {
    switch (item.type) {
      case "video":
        return <UpdatedVideo key={id} {...item} />;

      case "article":
        return <UpdatedArticle key={id} {...item} />;
    }
  });
}
