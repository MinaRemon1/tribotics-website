// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type CareerDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Career documents
 */
interface CareerDocumentData {
  /**
   * Title field in *Career*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: career.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Career*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: career.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Image field in *Career*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: career.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Career*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: career.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CareerDocumentDataSlicesSlice> /**
   * Meta Title field in *Career*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: career.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Career*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: career.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Career*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: career.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Career document from Prismic
 *
 * - **API ID**: `career`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CareerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<CareerDocumentData>, "career", Lang>;

type CaseStudyDocumentDataSlicesSlice = ImageBlockSlice | TextBlockSlice;

/**
 * Content for Case Study documents
 */
interface CaseStudyDocumentData {
  /**
   * Title field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Case Study*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Case Study*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CaseStudyDocumentDataSlicesSlice> /**
   * Meta Description field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: case_study.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Case Study*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Case Study*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: case_study.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Case Study document from Prismic
 *
 * - **API ID**: `case_study`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseStudyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CaseStudyDocumentData>,
    "case_study",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | PrivacyPolicySlice
  | CareersSlice
  | BlogSlice
  | ContactSlice
  | AboutSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogPostDocument
  | CareerDocument
  | CaseStudyDocument
  | HomepageDocument
  | PageDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Heading field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Blog → Default → Primary*
 */
export interface BlogSliceDefaultPrimary {
  /**
   * Heading field in *Blog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content Type field in *Blog → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.content_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  content_type: prismic.SelectField<"Blog" | "Case Study">;

  /**
   * Description field in *Blog → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * View More Text field in *Blog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.view_more_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  view_more_text: prismic.KeyTextField;

  /**
   * Image field in *Blog → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Blog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Blog*
 */
type BlogSliceVariation = BlogSliceDefault;

/**
 * Blog Shared Slice
 *
 * - **API ID**: `blog`
 * - **Description**: Blog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogSlice = prismic.SharedSlice<"blog", BlogSliceVariation>;

/**
 * Primary content in *Careers → Default → Primary*
 */
export interface CareersSliceDefaultPrimary {
  /**
   * Heading field in *Careers → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: careers.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Default variation for Careers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CareersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CareersSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Careers*
 */
type CareersSliceVariation = CareersSliceDefault;

/**
 * Careers Shared Slice
 *
 * - **API ID**: `careers`
 * - **Description**: Careers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CareersSlice = prismic.SharedSlice<
  "careers",
  CareersSliceVariation
>;

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Flip Words*
 */
export interface HeroSliceDefaultPrimaryFlipWordsItem {
  /**
   * Word field in *Hero → Default → Primary → Flip Words*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.flip_words[].word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  word: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * USP field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.usp
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  usp: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;

  /**
   * Flip Words field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.flip_words[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  flip_words: prismic.GroupField<
    Simplify<HeroSliceDefaultPrimaryFlipWordsItem>
  >;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageBlock → Default → Primary*
 */
export interface ImageBlockSliceDefaultPrimary {
  /**
   * Image field in *ImageBlock → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_block.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageBlock*
 */
type ImageBlockSliceVariation = ImageBlockSliceDefault;

/**
 * ImageBlock Shared Slice
 *
 * - **API ID**: `image_block`
 * - **Description**: ImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageBlockSlice = prismic.SharedSlice<
  "image_block",
  ImageBlockSliceVariation
>;

/**
 * Primary content in *PrivacyPolicy → Default → Primary*
 */
export interface PrivacyPolicySliceDefaultPrimary {
  /**
   * Title field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Effective Date field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.effective_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  effective_date: prismic.DateField;

  /**
   * Content field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for PrivacyPolicy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PrivacyPolicySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PrivacyPolicySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PrivacyPolicy*
 */
type PrivacyPolicySliceVariation = PrivacyPolicySliceDefault;

/**
 * PrivacyPolicy Shared Slice
 *
 * - **API ID**: `privacy_policy`
 * - **Description**: PrivacyPolicy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PrivacyPolicySlice = prismic.SharedSlice<
  "privacy_policy",
  PrivacyPolicySliceVariation
>;

/**
 * Primary content in *TextBlock → Default → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * text field in *TextBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      CareerDocument,
      CareerDocumentData,
      CareerDocumentDataSlicesSlice,
      CaseStudyDocument,
      CaseStudyDocumentData,
      CaseStudyDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      BlogSlice,
      BlogSliceDefaultPrimary,
      BlogSliceVariation,
      BlogSliceDefault,
      CareersSlice,
      CareersSliceDefaultPrimary,
      CareersSliceVariation,
      CareersSliceDefault,
      ContactSlice,
      ContactSliceVariation,
      ContactSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryFlipWordsItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageBlockSlice,
      ImageBlockSliceDefaultPrimary,
      ImageBlockSliceVariation,
      ImageBlockSliceDefault,
      PrivacyPolicySlice,
      PrivacyPolicySliceDefaultPrimary,
      PrivacyPolicySliceVariation,
      PrivacyPolicySliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
