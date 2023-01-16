import React, { useContext } from 'react';
import { TYPES } from '../actions/shopping.js';
import MyOrder from '@components/MyOrder/MyOrder';
import AppContext from 'context/AppContextShop.js';
import OrderToPay from '@components/OrderToPay/OrderToPay.jsx';
import style from 'pages/cart.module.scss';


function about() {
  const { state, dispatch } = useContext(AppContext);

  let total = 0;
  state.cart.length > 0 ? state.cart.map((item) => {
    let quantity = item.quantity;
    let price = item.price;
    total = total + (quantity * price)
    total = Number(Math.round(total + "e+2") + "e-2")
  }) : 0

  const addToCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: [product, 1] });
  };

  const delFromCart = (product, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: product });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: product });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div className={style.carrito}>
      <h3>Carrito</h3>
      <article className={style.cart}>
        {state.cart.map((item, index) => (
          <MyOrder key={index} product={item} delFromCart={delFromCart} addToCart={addToCart} />
        ))}
        <button className={style.cleanCart} onClick={clearCart}>Limpiar Carrito</button>
      </article>
      <OrderToPay total={total} cart={state.cart} />
    </div>
  );
}

export default about