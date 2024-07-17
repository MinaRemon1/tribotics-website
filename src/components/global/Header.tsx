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
            <nav className={`fixed w-full h-24 right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 py-4 px-4 z-[100] flex items-center border-neutral-900 justify-between transition-colors duration-500 ${scrolled ? 'backdrop-blur-lg bg-black/65' : 'bg-transparent'}`}>
                <div className='flex items-center justify-between h-full w-full'>
                    <Link href='/'>
                        <Image 
                            src="/logo2.png"
                            width={150}
                            height={70}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className='text-white hidden md:flex sm:flex'>
                        <ul className='hidden sm:flex'>
                            <li className={styles.navLinks}><Link href='/'>Home</Link></li>
                            <li className={styles.navLinks}><Link href='/about'>About</Link></li>
                            <li className={styles.navLinks}><Link href='/contact'>Contact</Link></li>
                            <li className={styles.navLinks}><Link href='/blog'>Blog</Link></li>
                            <li className={styles.navLinks}><Link href='/case-studies'>Case Studies</Link></li>
                            <li className={styles.navLinks}><Link href='/careers'>Careers</Link></li>
                        </ul>
                    </div>
                    <div className='sm:hidden md:hidden cursor-pointer pl-24'>
                        <BsList onClick={toggleMenu} className='h-8 w-8 text-white' />
                    </div>
                </div>
                <div className={menuOpen ? "fixed top-0 left-0 w-[75%] md:hidden sm:hidden h-screen bg-zinc-600 p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
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
                </div>
            </nav>
        </header>
    );
};

export default Header;
