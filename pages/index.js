import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import styles from '../styles/home.module.css';

const Index = () => {

return(
  <div>
    <Head>
      <title>MyWebsite</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

      <header className={styles.blue}>
        <p className={styles.headerTop}>Header Top</p>
      </header>

      <Navigation/>
      
      <main>
        <div className={styles.zone, styles.red}>
            <div className={styles.cover}>

              <div className={styles.container}>
                <h1>My Homepage</h1>
                <h2>I make websites.</h2>
                <p>Irure enim pariatur excepteur minim ut officia ut sed quis quis irure amet culpa eiusmod fugiat labore labore ut duis esse enim anim nisi ex laboris in consectetur minim officia occaecat nisi laborum duis in tempor est.</p>
              {/*<img className={styles.cover} alt="cover" src="/undraw.svg"/>*/}
              </div>
            </div>
        </div>

        <div className={styles.zone, styles.green}>
          <div className={styles.cardContainer}>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>

      </main>

      <div className={styles.zone, styles.yellow}>
        <footer className={styles.footer}>Footer</footer>
      </div>

    {/*</body>*/}
  </div>
  )
};
export default Index;