import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'components/Navbar/palta.png';
import IconCart from './IconCart';
import styles from './navbar.module.scss'
import { style } from '@mui/system';


// Para poder modificar el documento Html de la pagina

const Navbar = () => {


  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='/' className={styles.image}>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}

          />
        </Link>
        <IconCart />
      </nav>
    </div>
  )
}

export default Navbar