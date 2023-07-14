import React from "react";
import Image from "next/image";
import localFont from '@next/font/local';
import styles from '../app/page.module.css'
import Link from "next/link";


const boxing = localFont({ src : '../public/fonts/Boxing-Regular.otf', display: 'swap'});
const epilogue = localFont({ src : '../public/fonts/Epilogue-Regular.otf', display: 'swap'});

export default function page() {

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}className={styles.center}>
        <h1 className={boxing.className}>pip-boy&apos;s Vault</h1>
        <p className={epilogue.className}>computer science student, he/him</p>
      </div>
      <Link href= "https://github.com/pxs4528">
      <Image style={
        {
          position: 'absolute',
          top: '8%',
          right: '39%',
          margin: '10px',
        }

      } src="/../public/github-mark.png" alt="github" width={50} height={50}  />
      </Link>
      <Link href= "https://www.linkedin.com/in/parthsharma0310/">
      <Image style={
        {
          position: 'absolute',
          top: '8%',
          right: '36%',
          margin: '10px',
        }

      } src="/../public/linkedin.png" alt="linkedin" width={50} height={50}  />
      </Link>
      <div className={styles.image}>
      <Image src="/favicon.ico" alt="pipboy" width={200} height={200} />
      </div>
    </>
  )
}