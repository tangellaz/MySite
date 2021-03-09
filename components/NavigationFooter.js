import React from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import stylesNF from './NavigationFooter.module.css';

const NavigationFooter = () => {

return (
  <div className={styles.section3}>
    <footer className={stylesNF.footer}>
      <div className={stylesNF.footNav}>

        <div className={stylesNF.footCol}>
          <h3>Navigation</h3>
          <ul className={stylesNF.navListBot}>
            <li><Link href={'/'}><a className={stylesNF.a}>Home</a></Link></li>
            <li><Link href={'/about'}><a className={stylesNF.a}>About</a></Link></li>
            <li><Link href={'/services'}><a className={stylesNF.a}>Services</a></Link></li>
            <li><Link href={'/contact'}><a className={stylesNF.a}>Contact</a></Link></li>
          </ul>
        </div>

        <div className={stylesNF.footCol}>
          <h3>Locations</h3>
          <ul className={stylesNF.navListBot}>
            <li>Phoenix, AZ</li>
            <li>Tucson, AZ</li>
          </ul>
        </div>

        <div className={stylesNF.footCol}>
          <h3>Services</h3>
          <ul className={stylesNF.navListBot}>
            <li>Web Design</li>
            <li>Web Management</li>
          </ul>
        </div>

      </div>

      <p className={stylesNF.copyright}>
        Copyright © 2021 AZ Web Workshop, LLC. All rights reserved.
      </p>
    </footer>
  </div>
)
}

export default NavigationFooter