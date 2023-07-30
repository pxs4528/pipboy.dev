"use client";
import React from "react";
import Image from "next/image";
import localFont from '@next/font/local';
import styles from '../app/page.module.css'
import Link from "next/link";
import { useState } from "react";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import insta from "../public/i.svg";
import pfp from "../public/pfp.jpg";
import photo from "../public/pxs4528.jpg";
import { SiReact } from "@icons-pack/react-simple-icons";
import family from "../app/data/family.json"
import carbonise from "../app/data/carbonise.json"
import vault from "../app/data/vault.json"
import Card from "../app/components/cards";
import devpost from "../public/devpost.svg";

const boxing = localFont({ src : '../public/fonts/Boxing-Regular.otf', display: 'swap'});
const epilogue = localFont({ src : '../public/fonts/Epilogue-Regular.otf', display: 'swap'});
const epilogueBold = localFont({ src : '../public/fonts/Epilogue-Bold.otf', display: 'swap'});

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
        <div
        >
          {
            isHovering && (
              <Image className={styles.pfp} src={pfp} alt="my pfp lol" width={75} height={75} />
          )
          }
          { 
            !isHovering && (
              <Image className={styles.pfp} src={photo} alt="my pfp lol" width={75} height={75} />
          )
          }

        </div>
        {
        isHovering && (
          <div className={styles.name}>
            <h1 className={boxing.className}>pip.boy&apos;s vault</h1>
          </div>)
        }
        {
        !isHovering && (
          <div className={styles.name}>
            <h1 className={boxing.className}>parth&apos;s vault</h1>
          </div>)
        }
      

    </div>




    <div className={styles.containerP}>
      <p className={epilogue.className}>software engineer, computer science, uta &apos;25, he/him</p>
    </div>
    <div className={styles.imageGit}>
      <Link target="_blank" href= "https://github.com/pxs4528">
      <Image src={github} alt="github" width={35} height={35}  />
      </Link>
      <Link target="_blank" href= "https://www.linkedin.com/in/parthsharma0310/">
      <Image src={linkedin} alt="linkedin" width={35} height={35}  />
      </Link>
      <Link target="_blank" href= "https://www.instagram.com/parth.sharma2410/">
      <Image src={insta} alt="instagram" width={35} height={35}  />
      </Link>
      <Link target="_blank" href= "https://www.instagram.com/parth.sharma2410/">
      <Image src={devpost} alt="instagram" width={35} height={35}  />
      </Link>
    </div>

        <div className={styles.readme}>
          <h2 className={epilogueBold.className}>readme.md</h2>
        </div>
        <div className={styles.about}>
          <p>
            hi, my name is parth sharma, a {dob()} year old software engineer from dallas, texas.
            link to my résumé is <Link target="_blank" className={styles.here} href="https://drive.google.com/file/d/1LXbl5fQ1CGCmiMhH25NaDP7aNSLb1aP3/view?usp=sharing">here</Link>      
          </p>
          </div>
    </div>
    <h2 className="justify-center text-center font-extrabold ">projects</h2>
    <div className="items-center justify-center ps-8 flex flex-row fles-wrap py-8">
    <Card name={family.name} description={family.description} img={family.image} link = {family.link} lang={family.languages} time={family.time}/> 
    <Card name={carbonise.name} description={carbonise.description} img={carbonise.image} link = {carbonise.link} lang={carbonise.languages} time={carbonise.time}/> 
    </div>
    
    <div className="items-center justify-center ps-8 flex flex-row fles-wrap py-8">
    <Card name={vault.name} description={vault.description} img={vault.image} link = {vault.link} lang={vault.languages} time={vault.time}/>
    <p className={styles.moreP}>annnd some more ...
      <ul>
        <li>my <a rel="noopener" href="https://github.com/pxs4528/malloc" target="_blank"><span className={styles.here}>malloc</span></a> implementation in C</li>
        <li>my <a rel="noopener" href="https://github.com/pxs4528/shell" target="_blank"><span className={styles.here}>shell </span></a>  implementation in C</li>
        <li>hopefully in the future, my sql clone in C</li>
      </ul>
    </p>
    </div>
    </>
  )
}

const dob = () => {
  var today = new Date();
  var dob = new Date("10/24/2003");
  var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}