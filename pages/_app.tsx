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
        <meta name="keywords" content="쿠폰,상품권,기프티콘,기프티콘판매,기프티콘구매,기프티콘추천,기프티콘앱,편의점기프티콘,기프티콘선물,기프티콘사용법,모바일쿠폰,모바일상품권,중고쿠폰,중고장터,e쿠폰,할인쿠폰" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="니콘내콘" />
        <meta property="og:title" content="니콘내콘 - 국내 1위 기프티콘 플리마켓" />
        <meta property="og:description" content="모바일 쿠폰 중고거래 사이트. 남들은 정가로 살 때, 나는 할인가로 산다" />
        <meta property="og:image" content="./images/ncnc.jpg" />
        <meta property="og:url" content="https://ncnc.app" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="니콘내콘"/>
        <meta property="twitter:title" content="니콘내콘" />
        <meta property="twitter:description" content="모바일 쿠폰 중고거래 사이트. 남들은 정가로 살 때, 나는 할인가로 산다" />
        <meta property="twitter:image" content="./images/ncnc.jpg" />
        <meta property="twitter:url" content="https://ncnc.app" />

          <link rel="icon" href="/favicon.ico" />

    </Head>
    <NavBar />
    <Component {...pageProps} />
  </>
  )}

export default MyApp
