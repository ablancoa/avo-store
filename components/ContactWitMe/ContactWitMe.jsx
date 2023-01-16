import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import style from './contactWithMe.module.scss';


function SendEmail() {
  const [state, handleSubmit] = useForm("myyazepn");
  if (state.succeeded) {
    return (
      <div className={style.return}>
        <p>Muchas gracias por tu mensaje</p>
        <Link href='/'><button className={style.buttonReturn}>Regresar</button></Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={style.userDataForm}>
      <label htmlFor="name">
        Email Address
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder='Tu nombre'
        required
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder='example@email.com'
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message'>Dejame un mensaje</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar mensaje
      </button>
    </form>
  );
}

export default SendEmail;