import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose rounded-lg">
      <PrismicNextImage className="rounded-xl" field={slice.primary.image} imgixParams={{w: 600}} />
    </div>
  );
};

export default ImageBlock;
