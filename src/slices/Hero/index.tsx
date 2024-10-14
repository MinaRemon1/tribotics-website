"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FlipWords } from "@/components/ui/flip-words";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
// import { motion } from "framer-motion";
import React, { createContext } from 'react';
import { clients, globeConfig, labels, sampleArcs, testimonials, World,  } from "@/lib/constant";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { InfiniteMovingCards2 } from "@/components/ui/infinite-moving-cards2";
import Footer from "@/components/global/footer";
import Header from "@/components/global/Header";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { asLink } from '@prismicio/helpers';

// const images = [
//   "/pic1.jpg",
//   "/pic2.jpg",
//   "/pic3.jpg",
//   "/10.jpg"
// ];

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const words = ["Automations", "Robotics", "Mechatronics"];

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const flipWords = slice.primary.flip_words;
  const result = flipWords.map(item => item.word);

  const images = slice?.primary?.hero_images?.map(item => item.image?.url || '') || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Header />
      <div className="relative w-full flex items-center justify-center">
      {/* <div className="h-[90vh] w-screen relative overflow-hidden top-0 left-0 bg-custom-gradient">
          <div className="absolute z-50 inset-0 flex flex-col items-start pl-[14%] justify-center text-white font-bold px-4 text-center space-y-4">
            <div>
              <p className="bg-clip-text pt-12 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-5xl md:text-6xl lg:text-8xl">
                {slice.primary.usp}
              </p>
            </div>
            <div className="text-white font-thin text-xl md:text-2xl lg:text-3xl">
                {slice.primary.tag_line}<FlipWords className="" words={result} />
            </div>
            <div className="pt-10">
              <Link href="/contact">
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                    Contact Us
                  </button>
              </Link>
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
            <svg className="relative block w-[calc(100% + 1.3px)] h-56" data-name="Layer 1 z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
            </svg>
        </div>
        </div> */}
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              <div className="pb-10">
                <p className="bg-clip-text pt-12 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-5xl md:text-6xl lg:text-8xl">
                  {slice.primary.usp}
                </p>
              </div>
              <div className="text-white font-thin text-2xl md:text-3xl lg:text-4x pb-8">
                  {slice.primary.tag_line}<FlipWords className="" words={result} />
              </div>
            </motion.p>
            <Link href="/contact">
              <button className="px-4 py-2 backdrop-blur-sm border bg-violet-300/10 border-violet-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Contact Us</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-violet-500 to-transparent" />
              </button>
            </Link>
          </motion.div>
        </ImagesSlider>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-50">
            <svg className="relative block w-[calc(100% + 1.3px)] h-36" data-name="Layer 1 z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
            </svg>
        </div>
      </div>
      <div className="flex items-center pt-14 justify-center w-full h-full">
        <InfiniteMovingCards
          className="w-full"
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8 mt-20 text-center flex items-center justify-center flex-col">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          Our Services
        </h2>
        <br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl w-full">
        {slice?.primary?.services?.length > 0 ? (
          slice.primary.services.map((item, index) => (
            <div key={index} className="flex justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl w-full"> */}
                <Link href={asLink(item.href) ?? '#'}>
                  {item.image?.url ? (
                    <DirectionAwareHover imageUrl={item.image.url} className="w-full max-w-xs">
                      <p className="font-bold text-xl">{item.title}</p>
                    </DirectionAwareHover>
                  ) : (
                    <p></p>
                  )}
                </Link>
              </div>
            // </div>
          ))
        ) : (
          <p></p> // Fallback in case services array is empty or undefined
        )}
        </div>
        <br/>
        {/* <h2 className="text-black text-lg md:text-xl text-center">Check back later for full project case studies!</h2> */}
      </div>
      {/* <div className="h-[26rem] rounded-md flex flex-col w-full antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative">
        <br/>
      <h2 className="text-black text-3xl md:text-4xl pb-6 font-bold text-center">
          Testimonials
        </h2>
        <InfiniteMovingCards2
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      <br/><br/><br/><br/> */}

      <br/><br/><br/><br/>

{/* <br/><br/>
  <ImagesSlider className="h-[25rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            <div className="text-xl md:text-xl lg:text-3xl mx-auto font-normal items-center content-center justify-center text-black dark:text-neutral-800 text-center">
              <h1 className="text-center text-white">
                We orchestrate cutting-edge robotic automation solutions <br /> that elevate industrial efficiency and productivity
              </h1>
            </div>
            <div className="pt-10">
              <Link href="/about">
                <button className="inline-flex h-12 text-xl animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                  More about us
                </button>
              </Link>
            </div>
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
    </ImagesSlider>
    <br/><br/> */}

      <div className="hero--globe">
        <div className="flex flex-col items-center justify-center md:h-auto dark:bg-black bg-white relative w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto w-full relative flex-grow flex-shrink h-[25rem] md:h-[45rem] pl-2 box-border">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
              Our Global Clients
            </h2>
            <div className="absolute w-full bottom-0 inset-x-0 h-40 z-40" />
            <div className="absolute w-full bottom-0 md:bottom-0 h-96 md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} labels={labels} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-5xl mx-auto px-8 mt-20 text-center flex items-center justify-center flex-col">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          Case Studies
        </h2>
        <br/><br/>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl">
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic1.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">Robotics</p>
              </DirectionAwareHover>
            </div>
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic2.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">4D Simulators</p>
              </DirectionAwareHover>
            </div>
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic3.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">Metal Detection Systems</p>
              </DirectionAwareHover>
            </div>
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic1.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">Service 4</p>
              </DirectionAwareHover>
            </div>
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic2.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">Service 5</p>
              </DirectionAwareHover>
            </div>
            <div className="flex justify-center">
              <DirectionAwareHover imageUrl="/pic3.jpg" className="w-full max-w-xs">
                <p className="font-bold text-xl">Service 6</p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
        <br/>
        <h2 className="text-black text-lg md:text-xl text-center">Check back later for full project case studies!</h2>
      </div> */}
      <br/><br/><br/>
      <div className="relative h-[25rem] flex flex-col justify-center items-center px-4 bg-[url('/about.jpg')] bg-cover bg-no-repeat bg-[center_top_-80px] w-full">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative text-xl md:text-xl lg:text-3xl mx-auto font-normal items-center content-center justify-center text-black dark:text-neutral-800 text-center">
          <h1 className="text-center text-white">
            We orchestrate cutting-edge robotic automation solutions <br /> that elevate industrial efficiency and productivity
          </h1>
        </div>
        <div className="relative pt-10">
          <Link href="/about">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              More about us
            </button>
          </Link>
        </div>
      </div>


      <Footer/>
    </section>
  );
};


export default Hero;
