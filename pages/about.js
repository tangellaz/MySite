import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import styles from '../styles/home.module.css';

const About = () => (
  <div>
    <Head>
      <title>MyWebsite/About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <body className={styles.body}>
      {/*<div onScroll={() => {const {offsetTop}=navRef.current}}>*/}
      <header className={styles.header}>
        <div id="navbar">
          <Navigation/>
        </div>
      </header>

      <main>
      </main>
    </body>

    <div className={styles.zone, styles.yellow}>
      <footer className={styles.footer}>Footer</footer>
    </div>
  </div>
)
export default About;