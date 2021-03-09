import React from 'react';
import Link from 'next/link';
import ActiveLink from '../components/ActiveLink';
import { useRouter } from 'next/router'
import StylesNav from '../static/StylesNav';
import stylesN from './Navigation.module.css';

const Navigation = () => {

  return (
    <nav aria-label="Site Navigation" className={stylesN.nav}>
    <StylesNav/>
      <ul className={stylesN.ul}>

        <li>
          <Link href="/">
          <a>
            <img src="AZWWLogo2Minified.svg" className={stylesN.icon2}/>
          </a>
          </Link>
        </li>

        <li className={stylesN.li}>
          <ActiveLink activeClassName="active" href="/">
            <a className={stylesN.a}>Home</a>
          </ActiveLink>
        </li>

        <li className={stylesN.li}>
          <ActiveLink activeClassName="active" href="/about">
            <a className={stylesN.a}>About</a>
          </ActiveLink>
        </li>

        <li className={stylesN.li}>
          <ActiveLink activeClassName="active" href="/services">
            <a className={stylesN.a}>Services</a>
          </ActiveLink>
        </li>

{/*        <li className={stylesN.li,stylesN.dropdown}>
          <div className={stylesN.dropBtn}>
            <ActiveLink activeClassName="active" href="/dropdown">
              <a className={stylesN.aDrop}>Dropdown</a>
            </ActiveLink>
            <svg className={stylesN.caret}>
              <polyline points="3,7 8,11 13,7"/>
            </svg>
          </div>

          <div className={stylesN.dropContainer}>
              <ul className={stylesN.dropList}>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={stylesN.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={stylesN.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>*/}

        <li className={stylesN.li,stylesN.dropdown}>
          <div className={stylesN.dropBtn}>
            <p>Dropdown</p>
            <svg className={stylesN.caret}>
              <polygon points="3,7 8,11 13,7"/>
            </svg>
          </div>

          <div className={stylesN.dropContainer}>
              <ul className={stylesN.dropList}>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={stylesN.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={stylesN.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>


{/*        <li className={stylesN.li,stylesN.dropdown}>
          <button className={stylesN.dropBtn}>Dropdown
            <svg class="svg-triangle" className={stylesN.caret}>
              <polygon points="2,8 20,8 11,18"/>
            </svg>
          </button>

          <div className={stylesN.dropContainer}>
              <ul className={stylesN.dropList}>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item1">
                    <a className={stylesN.a}>Item1</a>
                  </ActiveLink>
                </li>
                <li className={stylesN.dropItem}>
                  <ActiveLink activeClassName="active" href="/item2">
                    <a className={stylesN.a}>Item2</a>
                  </ActiveLink>
                </li>
              </ul>
          </div>
        </li>*/}

        <li className={stylesN.liContact}>
          <ActiveLink activeClassName="active" href="/contact">
            <a className={stylesN.a}>Contact</a>
          </ActiveLink>
        </li>

      </ul>
    </nav>
  )
}
export default Navigation