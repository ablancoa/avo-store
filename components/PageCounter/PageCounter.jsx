import React from 'react';
import styles from './pageCounter.module.scss'

const PageCounter = ({ totalPages, indice, handleNext, handlePreview }) => {

  let pageNumber = indice + 1
  return (
    <div className={styles.counterContainer}>
      {pageNumber > 1 ? (<button onClick={handlePreview} >{'<'}</button>) : (null)}
      <p>{pageNumber} de {totalPages}</p>
      {pageNumber < totalPages ? (<button onClick={handleNext}>{'>'}</button>) : (null)}
    </div>
  )
}

export default PageCounter