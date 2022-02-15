import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import styles from '/styles/Categories.module.css'
import * as C from "/Const/Const";
import * as H from "/Hooks/Hooks.ts";
import { useState, useEffect } from 'react';
import CategoryContainer from '/Components/CategoryContainer/index.CategoryContainer';

const Categories: NextPage = ({curruntID, categoryProps}) => {
    console.log(curruntID);

    const router = useRouter();
    console.log(router.asPath);
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <CategoryContainer CategoryData={categoryProps}/>
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    )
  }
  
export const getServerSideProps: GetServerSideProps = async (context) => {
  const curruntID = context.params.id;
  const categoryProps = await H.useFetch(C.CONCATEGORY_API + curruntID + C.NESTED);
  return {
    props: {
      curruntID: curruntID,
      categoryProps: categoryProps.conCategory1.conCategory2s
    },
  };
};


  export default Categories