import { ItemBaseProps } from "../../App";

export type VideoBaseProps = ItemBaseProps & { url: string };

export default function Video(props: VideoBaseProps) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}
