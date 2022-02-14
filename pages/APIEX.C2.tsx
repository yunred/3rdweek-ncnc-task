import type { NextPage, GetStaticProps } from 'next'
import APICompo from '/Components/APICompo/index.APICompo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';

const APIEX: NextPage = ({ InititalProps } :T.APICompoProps ) => {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <APICompo InititalProps = {InititalProps}/>
            </main>
            <footer className={styles.footer}>
            
            </footer>
        </div>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const InititalProps:T.CategoryType = await H.useFetch(C.CONCATEGORY_API);
    return {
        props: {
            InititalProps
        }
    }

export const getStaticPropsConItems : GetStaticProps = async () => {
        const InititalProps:T.CategoryType = await H.useFetch(C.CONITEM_API + C.SOON);
        return {
            props: {
                InititalProps
            }
        }
}

export default APIEX