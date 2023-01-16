import React, { useContext } from 'react';
import cartLogo from 'components/Navbar/add-to-cart-basket-color-svgrepo-com.svg';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from 'context/AppContextShop.js';

import styles from './cart.module.scss'

const IconCart = () => {
  const { state } = useContext(AppContext);

  let total = 0;
  state.cart.map((item) => total = item.quantity + total)

  return (
    <div className={styles.cartItem}>
      <Link href='/cart'>
        <Image
          src={cartLogo}
          alt="Cart Logo"
          width={50}
          height={50} />
      </Link>
      <div>
        <div>Carrito({total > 0 ? <div>{total}</div> : 0})</div>
      </div>
    </div>
  )
}

export default IconCart