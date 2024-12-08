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
    >
      <div className="max-w-prose rounded-lg">
        <iframe
              width={700}
              height={415}
              className='aspect-[16/9] my-10 rounded-xl'
              src={`https://www.youtube-nocookie.com/embed/${slice.primary.youtube_id}`}
              allow='accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Youtube Video'
          />
      </div>
    </section>
  );
};

export default VideoBlock;
