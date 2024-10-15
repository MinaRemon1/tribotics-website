"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsList, BsX } from "react-icons/bs";

const styles = {
    navLinks: 'ml-10 hover:text-zinc-300 text-md ease-in-out duration-200',
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`fixed w-full h-32 right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 py-4 px-4 z-[100] flex items-center border-neutral-900 justify-between transition-colors duration-500 ${scrolled ? 'backdrop-blur-lg bg-black/65' : 'bg-transparent'}`}>
                <div className='flex items-center justify-between h-full w-full'>
                    <Link href='/'>
                        {/* <Image 
                            src="/logo2.png"
                            width={150}
                            height={70}
                            alt="Logo"
                            className="cursor-pointer"
                        /> */}
                        <Image 
                            src="/logo2.png"
                            width={150}
                            height={70}
                            alt="Logo"
                            className="cursor-pointer w-24 h-16 md:w-40 md:h-24"
                        />
                    </Link>
                    <div className='text-white hidden md:flex sm:flex'>
                        <ul className='hidden sm:flex'>
                            <li className={styles.navLinks}><Link href='/'>Home</Link></li>
                            <li className={styles.navLinks}><Link href='/about'>About</Link></li>
                            <li className={styles.navLinks}><Link href='/contact'>Contact</Link></li>
                            <li className={styles.navLinks}><Link href='/blog'>Blog</Link></li>
                            <li className={styles.navLinks}><Link href='/our-services'>Our Services</Link></li>
                            <li className={styles.navLinks}><Link href='/careers'>Careers</Link></li>
                        </ul>
                    </div>
                    <div className='sm:hidden md:hidden cursor-pointer pl-24'>
                        <BsList onClick={toggleMenu} className='h-8 w-8 text-white' />
                    </div>
                </div>
                <div className={menuOpen ? "fixed top-0 left-0 w-[75%] md:hidden sm:hidden h-screen bg-black p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
                    <div className='flex w-full items-center justify-end'>
                        <div className='cursor-pointer'>
                            <BsX onClick={toggleMenu} className='h-8 w-8 text-white' />
                        </div>
                    </div>
                    <Link href='/'>
                        <Image 
                            src="/logo2.png"
                            width={150}
                            height={70}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className='flex-col py-4'>
                        <ul>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/'>Home</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/about'>About</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/contact'>Contact</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/blog'>Blog</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/case-studies'>Case Studies</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/careers'>Careers</Link></li>
                        </ul>
                    </div>
                    <br/><br/>
                    <h6 className="footer-title pb-4 text-zinc-300">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <a href='https://www.linkedin.com/company/tribotics-limited/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                            d="M22.225 0H1.771C.791 0 0 .791 0 1.771v20.452C0 23.209.791 24 1.771 24h20.452C23.209 24 24 23.209 24 22.225V1.771C24 .791 23.209 0 22.225 0zM7.078 20.452H3.548V9.057h3.53v11.395zM5.313 7.454c-1.131 0-2.048-.917-2.048-2.048 0-1.131.917-2.048 2.048-2.048s2.048.917 2.048 2.048c0 1.131-.917 2.048-2.048 2.048zm15.14 12.998h-3.53v-5.479c0-1.306-.026-2.987-1.821-2.987-1.821 0-2.101 1.423-2.101 2.891v5.575h-3.53V9.057h3.39v1.561h.048c.472-.896 1.627-1.839 3.348-1.839 3.584 0 4.245 2.36 4.245 5.427v6.246z"></path>
                        </svg>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=61561303208748'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
