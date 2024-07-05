import Footer from "@/components/global/footer";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <>
    <PrismicRichText field={slice.primary.text}></PrismicRichText>
    <Footer/>
    </>
  );
};

export default TextBlock;
