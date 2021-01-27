import React from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css'

const Card = ({header, content}) => {
  
  return(
    <div className={styles.card}>
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
    )
}

export default Card