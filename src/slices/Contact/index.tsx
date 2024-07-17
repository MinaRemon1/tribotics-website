import Header from "@/components/global/Header";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import { BackgroundGradientAnimation2 } from "@/components/ui/bg-about";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
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
              <p className="bg-clip-text pt-20 drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-6xl">
                Contact Us
              </p>
            </div>
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
        <div className="text-sm md:text-lg font-light text-center text-zinc-600">
          Got a question? Shoot us a message!
        </div>
        <br />
        <form action="https://formsubmit.co/mina@etherealai.tech" method="POST" className="flex flex-col justify-center items-center space-y-5 mx-5 pb-20">
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                    <input type="hidden" name="_cc" value="matt@treadsoft.co"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <Input name="Name" type="text" placeholder="Name" className="w-96 mr-5 ml-5 text-black" />
                    <Input name="Email" type="email" placeholder="Email" className="w-96 mr-5 ml-5 text-black" />
                    <textarea name="Message" placeholder="Message" className="w-96 h-32 mr-5 ml-5 text-black flex  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    <Button type="submit" variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold hover:text-zinc-200">Submit</Button>
                </form>
                </div>
                <Footer/>
                </div>
    </section>
  );
};

export default Contact;
