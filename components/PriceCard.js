import React from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css'

const PriceCard = () => {
  
  return(
    <div className={styles.card}>
      <div className={styles.cardPrice}>
        <h2>
          <sup>$</sup>
          175
  {/*        <sub>/mo</sub>*/}
        </h2>
        <span>
          /month
        </span>
      </div>
      <ul className={styles.cardFeatures}>
        <li>li1</li>
        <li>li2</li>
      </ul>
    </div>
    )
}

export default PriceCard