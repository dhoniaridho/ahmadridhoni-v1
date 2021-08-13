import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
          <title>Ahmad Ridhoni</title>
      </Head>
      <h1 style={{fontWeight: '200'}}>I am sorry</h1>
      <h1 style={{fontWeight: '500'}}>this web under <span style={{background: 'red', padding: '0 10px 0  10px'}}>construction</span></h1>
      <p className={styles.footer}>dhoniaridho &copy; {new Date().getFullYear()}</p>
    </div>
  )
}
