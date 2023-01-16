import React, { useContext } from 'react';
import style from 'components/MyOrder/myorder.module.scss';
import Image from 'next/image';


const MyOrder = ({ product, delFromCart, addToCart }) => {

  return (
    <div className={style.item}>
      <div className={style.productDescription}>
        <Image src={product.image} alt={product.name} width={75} height={75} />
        <div>{product.name}</div>
      </div>
      <div className={style.manageCartItems}>
        <p>{product.quantity}</p>
        <div className={style.buttonCart_coantainer}>
          <button className={style.addToCart} onClick={() => addToCart(product)}>+</button>
          <button className={style.delFromCart} onClick={() => delFromCart(product)}>-</button>
        </div>
      </div>

    </div>
  )
}

export default MyOrder