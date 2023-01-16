import React from 'react';
import Image from 'next/image';
import addToCartIcon from 'containers/ProductInfo/cart-add-svgrepo-com.svg';
import styles from './productInfo.module.scss';
import Link from 'next/link';



const ProductInfo = ({ product, addToCart }) => {

  const linkToProduct = `/product/${product.id}`
  return (
    <section className={styles.product}>

      <Link href={linkToProduct}>
        <Image src={product.image} alt={product.name} width={200} height={200} />
      </Link>
      <div className={styles.productInfo}>
        <div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
        <figure onClick={() => addToCart(product)}>
          <Image src={addToCartIcon} alt='Add to cart Icon' width={30} height={30} />
        </figure>
      </div>
    </section>
  )
}

export default ProductInfo