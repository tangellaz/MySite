import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Navigation from '../components/Navigation';
import NavigationFooter from '../components/NavigationFooter';
import Card from '../components/Card';
import PriceCard from '../components/PriceCard';
import WindowSize from '../components/WindowSize';
import styles from '../styles/home.module.css';
import stylesI from './index.module.css';

const Index = () => {

  const {width, height} = WindowSize();


return(
  <div>
    <Head>
      <title>MyWebsite</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/AZWWLogo2Minified.svg"/>
  {/*    <link rel="shortcut icon" href="/public/favicon.ico" />*/}
    </Head>

      <Navigation/>
      
      <main>
        <div className={styles.section1}>
          <div className={stylesI.section1Container1}>
            <div className={stylesI.cover}>
              <img src="AZWWLogo1Minified.svg" className={stylesI.icon1}/>

              <div className={stylesI.container}>
                <h1>Professional Web Design</h1>
                <h1>and</h1>
                <h1>Management Services</h1>
                <h2>Allowing you to focus<br/>on your business.</h2>
              </div>

              <img src="MdFlipMini.png" className={stylesI.image}/>
          {/*</div>*/}

          {/*<div className={styles.section1Container2}>*/}
              {/*{width<768?<img src="MdFlipMini.png" style={{width:width*0.9}}/>:null}*/}
            </div>
          </div>

        </div>

        <div className={styles.divider}></div>

        <div className={styles.section2}>
          <h1 className={stylesI.headerPricing}>Pricing</h1>
          <PriceCard/>
        </div>

      </main>

      <div className={styles.divider}></div>

      <NavigationFooter/>

  </div>
  )
};
export default Index;