import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <div className="w-full sm:w-[100%] lg:max-w-2xl mx-auto sm:mx-0">
        <div className="relative w-full aspect-video my-10 rounded-xl overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src={`https://www.youtube-nocookie.com/embed/${slice.primary.youtube_id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
