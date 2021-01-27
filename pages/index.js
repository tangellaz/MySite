import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import PriceCard from '../components/PriceCard';
import styles from '../styles/home.module.css';

const Index = () => {

return(
  <div>
    <Head>
      <title>MyWebsite</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/AZWWLogo2.svg"/>
  {/*    <link rel="shortcut icon" href="/public/favicon.ico" />*/}
    </Head>

{/*      <header className={styles.section0}>
        <p className={styles.headerTop}>Header Top</p>
      </header>*/}

      <Navigation/>
      
      <main>
        <div className={styles.section1}>
            <div className={styles.cover}>

              <div className={styles.container}>
                <h1>My Homepage</h1>
                <h2>I make websites.</h2>
                <p>Irure enim pariatur excepteur minim ut officia ut sed quis quis irure amet culpa eiusmod fugiat labore labore ut duis esse enim anim nisi ex laboris in consectetur minim officia occaecat nisi laborum duis in tempor est.</p>
              </div>
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.section2}>
          <div className={styles.cardContainer}>
            <PriceCard/>
            {/*<Card/>*/}
            {/*<Card/>*/}
          </div>
        </div>

      </main>

      <div className={styles.divider}></div>

      <div className={styles.section3}>
        <footer className={styles.footer}>
          <div className={styles.footNav}>

            <div className={styles.footCol}>
              <h3>Navigation</h3>
              <ul className={styles.navListBot}>
                <li><a href={'/about'} className={styles.a}>About</a></li>
                <li><a href={'/services'} className={styles.a}>Services</a></li>
                <li><a href={'/contact'} className={styles.a}>Contact</a></li>
              </ul>
            </div>

            <div className={styles.footCol}>
              <h3>Locations</h3>
              <ul className={styles.navListBot}>
                <li>Phoenix, AZ</li>
                <li>Tucson, AZ</li>
              </ul>
            </div>

            <div className={styles.footCol}>
              <h3>Services</h3>
              <ul className={styles.navListBot}>
                <li>Web Design</li>
                <li>Web Management</li>
              </ul>
            </div>

          </div>

          <p className={styles.copyright}>
            Copyright © 2021 AZ Web Workshop, LLC. All rights reserved.
          </p>
        </footer>
      </div>

  </div>
  )
};
export default Index;