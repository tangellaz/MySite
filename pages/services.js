import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import NavigationFooter from '../components/NavigationFooter';
import styles from '../styles/home.module.css';
import stylesS from './services.module.css';


const Services = () => (
  <div>
    <Head>
      <title>Services</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/AZWWLogo2Minified.svg"/>
    </Head>

    <Navigation/>

    <main>
    <div className={styles.section1}>
      <div className={stylesS.section1Container1}>
        <div className={stylesS.cover}>
        <h1 className={stylesS.devMessage}>Under Development</h1>
        </div>
      </div>
    </div>
    </main>
    
    <div className={styles.divider}></div>
    <NavigationFooter/>

  </div>
)
export default Services;