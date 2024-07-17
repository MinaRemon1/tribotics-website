import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
    return (
      <header className="fixed right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 py-4 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
            <Image 
            src="/logo2.png"
            width={150}
            height={70}
            alt="Logo"
            className=""
            />
        </aside>
        <aside className="flex items-center gap-4">
            {/* <Link
            href="https://calendly.com/etherealai/30-minute-meeting"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm md:text-lg font-medium text-white backdrop-blur-3xl">
                Book A Free Call
            </span>
            </Link> */}
            {/* <Link href="https://calendly.com/etherealai/30-minute-meeting">
              <button className="p-[2px] relative m">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-3 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Book A Free Call
                </div>
              </button>
            </Link> */}
            <Link href='/'><p className='text-white'>Home</p></Link>
            <Link href='/about'><p className='text-white'>About</p></Link>
            <Link href='/contact'><p className='text-white'>Contact</p></Link>
            <Link href='/blog'><p className='text-white'>Blog</p></Link>
            <Link href='/case-studies'><p className='text-white'>Case Studies</p></Link>
            <Link href='/careers'><p className='text-white'>Careers</p></Link>
        </aside>
      </header>
    )
  }
  
  export default Navbar