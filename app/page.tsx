"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
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
import shell from "../app/data/shell.json"
import subhub from "../app/data/subhub.json"
import zenith from "../app/data/zenith.json"
import hackuta23 from "../app/data/hackuta23.json"
import malloc from "../app/data/malloc.json"
import vault from "../app/data/vault.json"
import CardComponent from "../app/components/cardComponent";
import List from "../app/components/list";
import SquareIconButton from "./components/SquareIconButton";

export default function Page() {
  const projects = [hackuta23, subhub, zenith, family, vault, malloc, shell, carbonise]
  const resume_link = "https://drive.google.com/file/d/16d2elK9kDjq4Rs3aJxhXyOOb0x5CR8MA/view?usp=sharing";
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
                <Image className="flex justify-center items-center rounded-full self-start" src={pfp} alt="my pfp lol" width={125} height={75} />
              )
            }
            {
              !isHovering && (
                <Image className="flex justify-center items-center rounded-full self-start" src={photo} alt="my pfp lol" width={125} height={75} />
              )
            }

          </div>
        </div>
        <div className="flex justify-center items-center">
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
          <p className="font-chillax-bold ">software engineer, computer science, uta &apos;25, he/him</p>
        </div>
        <div className="items-center justify-center flex flex-row m-7 flex-wrap">
          <SquareIconButton
            color="@E4B2CA"
            icon={github}
            text="GitHub"
            href="https://github.com/pxs4528"
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
      <h2 className='justify-center text-center text-3xl text-white font-bold'>projects</h2>
      <div className="items-center px-4 gap-9 justify-center flex flex-row m-7 flex-wrap ">
        {projects.map((project, index) => (
          <CardComponent key={index} project={project} />
        ))}
      </div>

      <h2 className=' text-center text-white text-3xl font-bold m-3'>my involvements</h2>
      <List />

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
