import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic';


const PrimaryButton = dynamic(() => import('../src/components/PrimaryButton'));


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="iO Productivity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.logo} src="../assets/iO-logo-300x300-purple.jpg"/>

        <h1 className={styles.title}>
          Select your role <br></br> to discover <a href="">infinite <br></br> opportunities</a> together
        </h1>

        <p className={styles.description}>
          <span className={styles.leftButton}>
            <PrimaryButton 
              buttonTitle={'Employee'}
              buttonLink={'/employee/home'}
            />
          </span>
          <span className={styles.rightButton}>
            <PrimaryButton 
              buttonTitle={'Teamlead '}
              buttonLink={'/teamlead/home'}
            />
          </span>
        </p>
      </main>
    </div>
  )
}
