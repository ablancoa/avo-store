import React, { useContext, useState } from 'react';
import ProductInfo from 'containers/ProductInfo/ProductInfo';
import styles from 'components/Card/productCard.module.scss';
import { TYPES } from '../../actions/shopping.js';
import AppContext from 'context/AppContextShop.js';
import PageCounter from '@components/PageCounter/PageCounter.jsx';


const ProductCard = () => {
  const { state, dispatch, data, loading, error } = useContext(AppContext);


  const addToCart = (product) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: [product, 1] });
  };



  if (loading) return "Loading ...";
  if (error) return `Error ${error}`;

  // Division de las pantallas en varios productos
  const totalPages = Math.ceil(data.length / 5)
  const [indice, setIndice] = useState(0)
  const productToShow = [...data].splice((indice * 5), 5)

  const handleNext = () => {
    setIndice(indice + 1)
  }

  const handlePreview = () => {
    setIndice(indice - 1)
  }
  return (
    <div>
      <div className={styles.card}>
        {productToShow.map((product) => (
          <ProductInfo key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <PageCounter
        totalPages={totalPages}
        indice={indice}
        handleNext={handleNext}
        handlePreview={handlePreview}
        data={data}
      />
    </div>
  )

}

export default ProductCard;