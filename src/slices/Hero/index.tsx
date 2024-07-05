"use client";
import Navbar from "@/components/global/navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FlipWords } from "@/components/ui/flip-words";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { TextImage } from "@/components/ui/content";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { createContext } from 'react';
import { clients } from "@/lib/constant";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { InfiniteMovingCards2 } from "@/components/ui/infinite-moving-cards2";
import Footer from "@/components/global/footer";
import Globe from 'globe.gl';

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});
 

  const globeConfig = {
    pointSize: 10,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "rgb(88, 187, 240)",
    atmosphereAltitude: 0.3,
    emissive: "#1f5478",
    emissiveIntensity: 0.8,
    shininess: 0.9,
    polygonColor: "white",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 6,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const words = ["Automations", "Robotics", "Mechatronics"];

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Navbar />
      <div className="relative w-full flex items-center justify-center">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-start pl-[14%] justify-center text-white font-bold px-4 pointer-events-none text-center space-y-4">
            <div>
              <p className="bg-clip-text pt-12 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-5xl md:text-6xl lg:text-8xl">
                {/* {slice.primary.usp} */}
                Tribotics
              </p>
            </div>
            <div className="text-white font-thin text-xl md:text-2xl lg:text-3xl">
              
                {/* {slice.primary.tag_line} */}
                Empowering Industry with Intelligent<FlipWords className="" words={words} />
            </div>
            <div className="pt-20">
              <a href="/contact" className="">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
            <svg className="relative block w-[calc(100% + 1.3px)] h-56" data-name="Layer 1 z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
            </svg>
        </div>
        </BackgroundGradientAnimation>
      </div>

      <div className="flex items-center pt-14 justify-center w-full h-full">
        <InfiniteMovingCards
          className="w-full"
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="h-[20rem] flex flex-col justify-center items-center px-4">
      <div className="text-3xl mx-auto font-normal items-center content-center justify-center text-black dark:text-neutral-800 text-center">
        <h1 className="text-center">
          We orchestrate cutting-edge robotic automation solutions <br /> that elevate industrial efficiency and productivity
        </h1>
      </div>

        <div className="pt-10">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            More about us
          </button>
        </div>
      </div>
      <div className="h-[26rem] rounded-md flex flex-col w-full antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative">
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
      <br/><br/>
      <div className="hero--globe">
      <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative  h-full md:h-[40rem] px-4">
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We have clients worldwide
          </h2>
          {/* <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p> */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
    </div>
      <div className="max-w-5xl mx-auto px-8 mt-20 text-center flex items-center justify-center flex-col">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          Our Services
        </h2>
        <div className="h-[20rem] flex items-center justify-center flex-col grid-cols-3 md:flex-row gap-8 mr-5 ml-5">
          <DirectionAwareHover imageUrl="/pic1.jpg">
            <p className="font-bold text-xl">Service 1</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="/pic2.jpg">
            <p className="font-bold text-xl">Service 2</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="/pic3.jpg">
            <p className="font-bold text-xl">Service 3</p>
          </DirectionAwareHover>
          </div>
          <div className="h-[13rem] flex items-center justify-center flex-col grid-cols-3 md:flex-row gap-8 mr-5 ml-5">
          <DirectionAwareHover imageUrl="/pic1.jpg">
            <p className="font-bold text-xl">Service 4</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="/pic2.jpg">
            <p className="font-bold text-xl">Service 5</p>
          </DirectionAwareHover>
          <DirectionAwareHover imageUrl="/pic3.jpg">
            <p className="font-bold text-xl">Service 6</p>
          </DirectionAwareHover>
        </div>
      </div>
      <br /><br /><br />
      <h2 className="text-black pt-20 text-3xl md:text-4xl font-bold text-center">
          Section 3
        </h2>
      <div className="container mx-auto p-8">
      <TextImage
        imageUrl="/pic1.jpg"
        title="Title 1"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        className="mb-8"
        textClassName="text-left"
        imageClassName="rounded-md"
      />
      <br />
      <TextImage
        imageUrl="/pic2.jpg"
        title="Title 2"
        text="It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        reverse
        className="mb-8"
        textClassName="text-left"
        imageClassName="rounded-md"
      />
    </div>
      <br /><br /><br /><br />
      <Footer/>
      {/* <header className="right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 pt-10 pb-6 px-4 bg-black backdrop-blur-lg z-[100] flex items-center border-neutral-900 justify-between w-screen">
        <aside className="flex items-center gap-[2px]">
        </aside>
        <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <p className="text-zinc-400 text-sm">© 2024 Tribotics. All rights reserved.</p>
        </div>
        <aside className="flex items-center gap-4">
            <p className="text-zinc-400 text-sm">sales@tribotics.co.uk</p>
        </aside>
      </header> */}
    </section>
  );
};


export default Hero;
