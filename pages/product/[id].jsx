import React, { useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import AppContext from 'context/AppContextShop.js';
import Image from 'next/image';
import { TYPES } from 'actions/shopping';
import style from './id.module.scss';
import ProductTable from '@components/ProductTable/ProductTable';
import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch'

export const getStaticPaths = async () => {
  const response = await fetch('https://avo-store-phi.vercel.app/api/avo')
  console.log(response)
  const { data: productList } = await response.json()

  const paths = productList.map(({ id }) => ({
    params: { id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`https://avo-store-phi.vercel.app/api/avo/${params.id}`)
  const product = await response.json()

  return {
    props: {
      product
    }
  }
}

function ProductItem({ product }) {
  const { state, dispatch, data, loading, error } = useContext(AppContext);
  const router = useRouter();
  const quantityPorduct = useRef(null)

  const handleCart = (product) => {
    if (quantityPorduct.current.value >= 1) {
      dispatch({ type: TYPES.ADD_TO_CART, payload: [product, quantityPorduct.current.value] });
    } else {
      console.log("Error");
    }
  };

  // const product = data.find(item => item.id === router.query.id)

  if (loading) return "Loading ...";
  if (error) return `Error ${error}`;
  if (product) {

    const { name, id, sku, price, image } = product;
    const { description, shape, hardiness, taste } = product.attributes;

    return (
      <div className={style.productDataContainer}>
        <div className={style.productContainer}>
          <Image src={image} alt={name} width={300} height={300} />
          <div className={style.productData}>
            <h2>{name}</h2>
            <p className={style.sku}>SKU: {sku}</p>
            <p>$: {price}</p>
          </div>
          <div className={style.addToCartContainer}>
            <input type='number' placeholder='Cantidad' ref={quantityPorduct}></input>
            <button className={style.buttonAddToCart} onClick={() => handleCart(product)}>+</button>
          </div>
        </div>
        <div className={style.productDescription} >
          <h2>Description</h2>
          <p>{description}</p>
        </div>
        <div className={style.tableAttributes}>
          <ProductTable shape={shape} hardiness={hardiness} taste={taste} />
        </div>
      </div>
    )
  }
}

export default ProductItem