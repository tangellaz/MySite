import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import NavigationFooter from '../components/NavigationFooter';
import styles from '../styles/home.module.css';
import stylesA from './about.module.css';

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navigation/>

    <main>
    <div className={styles.section1}>
      <div className={stylesA.section1Container1}>
        <div className={stylesA.cover}>
        <h1 className={stylesA.devMessage}>Page Under Development</h1>
        </div>
      </div>
    </div>
    </main>
    
    <div className={styles.divider}></div>
    <NavigationFooter/>

  </div>
)
export default About;