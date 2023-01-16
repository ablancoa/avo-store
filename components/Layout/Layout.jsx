import React from 'react'
import styles from './layout.module.scss';
import Footer from '@components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  )
}

export default Layout