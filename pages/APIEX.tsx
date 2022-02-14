import type { NextPage, GetStaticProps, GetServerSideProps  } from 'next'
import APICompo from '/Components/APICompo/index.APICompo'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';

const APIEX: NextPage = ({ GetProductProps, GetCategoryProps } :T.APICompoProps ) => {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <APICompo GetProductProps = {GetProductProps} GetCategoryProps= {GetCategoryProps}/>
            </main>
            <footer className={styles.footer}>
            
            </footer>
        </div>
    )
}

export const getServerSideProps : GetServerSideProps  = async () => {
    const GetCategoryProps:T.CategoryType = await useFetch(C.CONCATEGORY_API);
    const GetProductProps = await useFetch(C.CONITEM_API + C.SOON);
    
    return {
        props: {GetProductProps:GetProductProps, GetCategoryProps:GetCategoryProps}
    }
}



export default APIEX