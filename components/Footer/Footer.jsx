import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from './footer.module.scss';
import instagramIcon from 'public/icons/instagram.svg'
import facebookIcon from 'public/icons/facebook.svg'
import githubIcon from 'public/icons/github.svg'
import linkedlinIcon from 'public/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.creatorContainer}>
        <h3>Created by</h3>
        <p>Alexander Blanco Amador</p>
      </div>
      <div className={style.contactContainer}>
        <div className={style.contactWithMe}>
          <h3>Colaboremos</h3>
          <p>Si deseas que colaboremos, <Link href='/sendEmail'>escribeme un mensaje</Link> o contactame a traves de mis redes sociales</p>

        </div>
        <div className={style.socialMedia}>
          <Link href='https://www.instagram.com/blancoamador95/' ><Image src={instagramIcon} alt='Instagram' width={25} height={25} /></Link>
          <Link href='https://www.facebook.com/alexander.blanco.7777/'><Image src={facebookIcon} alt='Instagram' width={25} height={25} /></Link>
          <Link href='https://github.com/ablancoa/avo-store/'><Image src={githubIcon} alt='Instagram' width={25} height={25} /></Link>
          <Link href='https://www.linkedin.com/in/alexander-blanco-amador/'><Image src={linkedlinIcon} alt='Instagram' width={25} height={25} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer