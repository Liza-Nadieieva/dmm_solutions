import React from 'react';
import styles from './Header.module.css';


export const Header = () => {
  return(
    <div className={styles.header}>
      <h1 className={styles.header__title}>Test App</h1>
    </div>
  )
}