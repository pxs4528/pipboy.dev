"use client";
import React from "react";
import Image from "next/image";
import localFont from '@next/font/local';
import styles from '../app/page.module.css'
import Link from "next/link";
import { useState } from "react";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import email from "../public/email.svg";
import insta from "../public/i.svg";
import resume from "../public/resume.svg";
import pfp from "../public/pfp.jpg";
import photo from "../public/pxs4528.jpg";
import family from "../app/data/family.json"
import carbonise from "../app/data/carbonise.json"
import subhub from "../app/data/subhub.json"
import vault from "../app/data/vault.json"
import Card from "../app/components/cards";
import List from "../app/components/list";
import SquareIconButton from "./components/SquareIconButton";

export default function Page() {
  const resume_link = "https://drive.google.com/file/d/1b8My0M0feUdq48xalc7RqwG2vcEJRdAo/view?usp=sharing";
  console.log(process.env.GITHUB_CLIENT_ID)
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
            <h1 className="font-chilla">pip.boy&apos;s vault</h1>
          </div>)
        }
        {
        !isHovering && (
          <div className={styles.name}>
            <h1 className="font-chillax">parth&apos;s vault</h1>
          </div>)
        }
      

    </div>




    <div className={styles.containerP}>
      <p className="font-chillax-bold">software engineer, computer science, uta &apos;25, he/him</p>
    </div>
    <div className="items-center justify-center flex flex-row flex-wrap">      
      <SquareIconButton
          color= "@E4B2CA"
          icon = {github}
          text = "GitHub"
          href = "https://github.com/pxs4528"
      />
      <SquareIconButton
                color="#086788"
                icon={linkedin}
                text="LinkedIn"
                href="https://www.linkedin.com/in/parthsharma0310"
            />
            <SquareIconButton
                color="#150811"
                icon={insta}
                text="Instagram"
                href="https://www.instagram.com/parth.sharma2410"
            />
            <SquareIconButton
                color="#DDAA5E"
                icon={resume}
                text="Resume"
                href={resume_link}
            />
             <SquareIconButton
                color="#26081C"
                icon={email}
                text="Email"
                href="mailto:parthsharma.cs@gmail.com"
            />
    </div>

        <div className={styles.readme}>
          <h2 className="font-chillax">readme.md</h2>
        </div>
        <div className={styles.about}>
          <p className="font-chillax">
            hi, my name is parth sharma, a {dob()} year old software engineer from dallas, texas.
            link to my résumé is <Link target="_blank" className={styles.here} href={resume_link}>here</Link>      
          </p>
          </div>
    </div>
    <h2 className='justify-center text-center text-3xl font-bold'>projects</h2>
    <div className="items-center justify-center flex flex-row flex-wrap ">
    <Card name={subhub.name} description={subhub.description} img={subhub.image} link = {subhub.link} lang={subhub.languages} time={subhub.time}/>
      <Card name={family.name} description={family.description} img={family.image} link={family.link} lang={family.languages} time={family.time} />
      <Card name={carbonise.name} description={carbonise.description} img={carbonise.image} link={carbonise.link} lang={carbonise.languages} time={carbonise.time} />
      <Card name={vault.name} description={vault.description} img={vault.image} link = {vault.link} lang={vault.languages} time={vault.time}/>
    </div>

    
    <div className="items-center justify-center ps-8 flex flex-row fles-wrap py-8">
    <p className={styles.moreP}>Additionally,
      <ul>
        <li>my custom memory allocation implementation using C -&gt; <a rel="noopener" href="https://github.com/pxs4528/malloc" target="_blank"><span className={styles.here}>malloc</span></a></li>
        <li>my creation of a C-based shell application -&gt; <a rel="noopener" href="https://github.com/pxs4528/shell" target="_blank"><span className={styles.here}>shell </span></a></li>
      </ul>
    </p>
    </div>
    <div className="">
    <h2 className=' text-center text-3xl font-bold'>my involvements</h2>
     <List/>
     </div>

     {/* <button className="self-center text-center text-2xl font-bold"><Link className="self-center text-center text-2xl font-bold" href="/admin">admin</Link></button> */}
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
