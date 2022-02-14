import type { NextPage, GetServerSideProps } from 'next'
import axios from 'axios'
import APICompo from '/Components/APICompo/index.APICompo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';

const APIEX: NextPage = ({ InititalProps, ConItems } :T.APICompoProps ) => {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <APICompo InititalProps = {InititalProps} ConItems={ConItems}/>
            </main>
            <footer className={styles.footer}>
            
            </footer>
        </div>
    )
}

// export const getStaticProps : GetStaticProps = async () => {
//     const InititalProps:T.CategoryType = await H.useFetch(C.CONCATEGORY_API);
//     return {
//         props: {
//             InititalProps
//         }
//     }

export const getServerSideProps : GetServerSideProps = async () => {
        const ConItems = await axios(`${C.CONITEM_API + C.SOON}`);
        return{
            props: ConItems
        }
}

export default APIEX