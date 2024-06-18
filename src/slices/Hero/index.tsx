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

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const words = ["Automation", "Robotic Systems", "Mechatronics", "Autonomous Systems", "Automated Machinery"];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

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
          <div className="absolute z-50 inset-0 flex flex-col items-start pl-12 justify-center text-white font-bold px-4 pointer-events-none text-center space-y-4">
            <div>
              <p className="bg-clip-text pt-20 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-6xl">
                {/* {slice.primary.usp} */}
                Tribotics
              </p>
            </div>
            <div>
              <p className="text-white font-thin text-lg md:text-xl lg:text-2xl">
                {/* {slice.primary.tag_line} */}
                Empowering Industry with Intelligent<FlipWords className="" words={words} />
              </p>
            </div>
            <div className="pt-20">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                Learn more
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
            <svg className="relative block w-[calc(100% + 1.3px)] h-56" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
            </svg>
        </div>
        </BackgroundGradientAnimation>
      </div>
      <div className="h-[20rem] flex flex-col justify-center items-center px-4">
        <div className="text-3xl mx-auto font-normal text-black dark:text-neutral-800">
          {/* We are a company that specializes in making <br /> robots? maybe? not sure... that are
          <FlipWords className="" words={words} /> */}
          Empowering Industry with Intelligent<FlipWords className="" words={words} />
        </div>
        <div className="pt-10">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-gray-800 to-gray-900 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            More about us
          </button>
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
      {/* <div className="max-w-5xl mx-auto px-8 mt-20 text-center flex items-center justify-center flex-col">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          Section 3
        </h2>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
      </div> */}
      <br /><br /><br /><br />
      <header className="right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 py-4 px-4 bg-black backdrop-blur-lg z-[100] flex items-center border-t-[1px] border-neutral-900 justify-between w-screen">
        <aside className="flex items-center gap-[2px]">
            {/* <Image 
            src="/logo2.png"
            width={120}
            height={70}
            alt="Logo"
            className=""
            /> */}
            <p>Footer here</p>
        </aside>
        {/* <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <p className="text-zinc-400 text-sm">© 2024 Tribotics. All rights reserved.</p>
        </div>
        <aside className="flex items-center gap-4">
            <p className="text-zinc-400 text-sm">email@tribotics.com</p>
        </aside> */}
      </header>
    </section>
  );
};

export default Hero;
