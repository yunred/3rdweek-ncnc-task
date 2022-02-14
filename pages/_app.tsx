import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '../Components/Nav/NavBar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>니콘내콘</title>
        <meta name="description" content="트리온보딩 Team-16 잘하조의 데모사이트입니다." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar/>
    <Component {...pageProps} />
  </>
  )}


export default MyApp
