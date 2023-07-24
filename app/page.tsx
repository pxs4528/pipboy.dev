"use client";
import React from "react";
import Image from "next/image";
import localFont from '@next/font/local';
import styles from '../app/page.module.css'
import Link from "next/link";
import { useState } from "react";



const boxing = localFont({ src : '../public/fonts/Boxing-Regular.otf', display: 'swap'});
const epilogue = localFont({ src : '../public/fonts/Epilogue-Regular.otf', display: 'swap'});

export default function Page() {
  const [isHovering, setIsHovering] = useState(false);
  const handleOver = () => {
    setIsHovering(true);
  }
  const handleLeave = () => {
    setIsHovering(false);
  }   
  return (
    <>
    <div className={styles.main}>
    <div className={styles.container} 
    onMouseOver={handleOver}
    onMouseLeave={handleLeave}
    >
      {isHovering && (
        <div>
      <h1 className={boxing.className}>pip.boy&apos;s vault</h1>

          </div>)}
      {!isHovering && (
        <div>
      <h1 className={boxing.className}>parth&apos;s vault</h1>
      </div>)}
    </div>
    <div className={styles.containerP}>
      <p className={epilogue.className}>software engineer, computer science, uta &apos;25, he/him</p>
    </div>
    <div className={styles.imageGit}>
      <Link href= "https://github.com/pxs4528">
      <Image src={"/../public/github-mark.png"} alt="github" width={50} height={50}  />
      </Link>
      <Link href= "https://www.linkedin.com/in/parthsharma0310/">
      <Image src={"/../public/linkedin.png"} alt="linkedin" width={50} height={50}  />
      </Link>
    </div>
    </div>
    
    </>
  )
}