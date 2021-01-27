import React from 'react';
import Link from 'next/link';
import ActiveLink from '../components/ActiveLink';
import StylesNav from '../components/StylesNav';
import { useRouter } from 'next/router'
import styles from '../styles/home.module.css'


const Navigation = () => {

  return (
    <nav aria-label="Site Navigation" className={styles.nav}>
    <StylesNav/>
      <ul className={styles.ul}>

        <li>
          <Link href="/">
          <a>
            <img src="AZWWLogo2.svg" className={styles.icon2}/>
          </a>
          </Link>
        </li>

        <li className={styles.li}>
          <ActiveLink activeClassName="active" href="/">
            <a className={styles.a}>Home</a>
          </ActiveLink>
        </li>

        <li className={styles.li}>
          <ActiveLink activeClassName="active" href="/about">
            <a className={styles.a}>About</a>
          </ActiveLink>
        </li>

        <li className={styles.li}>
          <ActiveLink activeClassName="active" href="/services">
            <a className={styles.a}>Services</a>
          </ActiveLink>
        </li>

{/*        <li className={styles.li,styles.dropdown}>
          <div className={styles.dropBtn}>
            <ActiveLink activeClassName="active" href="/dropdown">
              <a className={styles.aDrop}>Dropdown</a>
            </ActiveLink>
            <svg className={styles.caret}>
              <polyline points="3,7 8,11 13,7"/>
            </svg>
          </div>

          <div className={styles.dropContainer}>
              <ul className={styles.dropList}>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={styles.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={styles.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>*/}

        <li className={styles.li,styles.dropdown}>
          <div className={styles.dropBtn}>
            <p>Dropdown</p>
            <svg className={styles.caret}>
              <polygon points="3,7 8,11 13,7"/>
            </svg>
          </div>

          <div className={styles.dropContainer}>
              <ul className={styles.dropList}>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={styles.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={styles.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>


{/*        <li className={styles.li,styles.dropdown}>
          <button className={styles.dropBtn}>Dropdown
            <svg class="svg-triangle" className={styles.caret}>
              <polygon points="2,8 20,8 11,18"/>
            </svg>
          </button>

          <div className={styles.dropContainer}>
              <ul className={styles.dropList}>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={styles.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={styles.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={styles.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>*/}

        <li className={styles.liContact}>
          <ActiveLink activeClassName="active" href="/contact">
            <a className={styles.a}>Contact</a>
          </ActiveLink>
        </li>

      </ul>
    </nav>
  )
}
export default Navigation