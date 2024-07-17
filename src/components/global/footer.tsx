import React from 'react'
import Image from "next/image";

const footer = () => {
  return (
    <footer className="footer bg-black text-base-content p-10">
  <aside>
    <Image 
        src="/logo.png"
        width={120}
        height={70}
        alt="Logo"
        className=""
    />
    <p className='pl-[5%]'>
        Tribotics LTD.
        <br/><br/>
        © 2024 Tribotics. All rights reserved.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <p>
        {/* <span className='font-extrabold'>Contact</span> */}
        <a href="mailto:sales@tribotics.co.uk">sales@tribotics.co.uk</a>
        <br/><br/>
        <a href='tel:+44 (0)1685 350617'>+44 (0)1685 350617</a>
        <br/>
        <a href='tel:+44 (0)7833 128264'>+44 (0)7833 128264</a>
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Address</h6>
    <p>
        Unit 1
        <br/>
        Triangle Business Park
        <br/>
        Merthyr Tydfil
        <br/>
        South Wales
        <br/>
        CF48 4TQ
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover" href='/about'>About us</a>
    <a className="link link-hover" href='/contact'>Contact</a>
    <a className="link link-hover" href='/blog'>Blog</a>
    <a className="link link-hover">Careers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    {/* <a className="link link-hover">Terms of use</a> */}
    <a href='/privacy-policy' className="link link-hover">Privacy policy</a>
    {/* <a className="link link-hover">Cookie policy</a> */}
  </nav>
</footer>
  )
}

export default footer