import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>니콘내콘</title>
        <meta name="description" content="트리온보딩 Team-16 잘하조의 데모사이트입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
