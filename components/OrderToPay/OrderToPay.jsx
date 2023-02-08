import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from './orderToPay.module.scss'

import DownloadOrder from './Modal';


function OrderToPay({ total, cart }) {
  const [state, handleSubmit] = useForm("mjvdkkjd");
  const [showModal, setShowModal] = useState(false)

  const form = useRef(null);
  const dataUser = {
    username: "",
    address: "",
    email: "",
    total: total
  };

  if (state.succeeded) {
    const formData = new FormData(form.current);
    dataUser.username = formData.get('name')
    dataUser.address = formData.get('address')
    dataUser.email = formData.get('email')
    !showModal ? setShowModal(true) : null

  }

  if (showModal) {
    return (
      <DownloadOrder cart={cart} total={total} dataUser={dataUser} />
    )
  }

  return (
    <div>
      <section className={style.totalPrice}>
        <div>Total de la compra</div>
        <div>$ {total}</div>
      </section>
      <form onSubmit={handleSubmit} className={style.userDataForm} ref={form}>
        <label htmlFor="text">Name</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="text">Delivery address</label>
        <input id="address" type="text" name="address" required />
        <ValidationError prefix="Address" field="address" errors={state.errors} />
        <label htmlFor="email">Email to contact</label>
        <input id="email" type="text" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button type="submit" disabled={!total ? true : false}>Pagar</button>
        <textarea id="message" name="message" type="text" readOnly hidden value={
          cart.length > 0 ?
            cart.map((item, index) => {
              return (
                `🥑 Product: ${item.name} x ${item.quantity} | Price: ${item.price} | Id: ${item.id} \n`)
            }) : ""
        } />
      </form>
    </div>
  )
}

export default OrderToPay