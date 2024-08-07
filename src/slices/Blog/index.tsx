"use client";

import { BackgroundGradientAnimation2 } from "@/components/ui/bg-about";
import { Content, PrismicDocumentWithUID } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";
import Footer from "@/components/global/footer";
import Header from "@/components/global/Header";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

type BlogPostDocument = PrismicDocumentWithUID<any, 'blog_post', string>;
type CaseStudyDocument = PrismicDocumentWithUID<any, 'case_study', string>;

/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = ({ slice }: BlogProps): JSX.Element => {
  const [blogPosts, setBlogPosts] = useState<BlogPostDocument[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudyDocument[]>([]);
  const contentType = slice.primary.content_type || "Blog";

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      if (contentType === "Blog") {
        const blogPosts = await client.getAllByType<BlogPostDocument>("blog_post");
        setBlogPosts(blogPosts);
      } else {
        const caseStudies = await client.getAllByType<CaseStudyDocument>("case_study");
        setCaseStudies(caseStudies);
      }
    };

    fetchData();
  }, [contentType]);

  const items = contentType === "Blog" ? blogPosts : caseStudies;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="relative w-full flex items-center justify-center">
          <BackgroundGradientAnimation2>
            <div className="absolute z-50 inset-0 flex flex-col items-start pl-[20%] pb-[4%] justify-center text-white font-bold px-4 pointer-events-none text-center space-y-4">
              <div>
                <p className="bg-clip-text pt-20 drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-4xl md:text-5xl lg:text-7xl">
                  {slice.primary.heading}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-screen relative">
            <Image
              src="/gears.png"
              alt="Gears"
              className="absolute right-0 top-0 w-full h-full object-cover"
              width={1500}
              height={1500}
            />
          </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
              <svg className="relative block w-[calc(100% + 1.3px)] h-56" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
              </svg>
            </div>
          </BackgroundGradientAnimation2>
        </div>
        <div className="flex-grow">
          <ContentList items={items} contentType={contentType} Image={slice.primary.image} />
        </div>
        <br /><br /><br /><br />
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
