import type { NextPage } from 'next'
import APICompo from '/Components/APICompo/index.APICompo'
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
        {/* API 통신 예제 컴포넌트입니다.
        <APICompo/>
        */}
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
