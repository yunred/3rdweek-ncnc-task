import QuestionContainer from 'Components/QuestionContainer/index.QuestionContainer';
import styles from "styles/Home.module.css";

import * as H from "Hooks/Hooks";
import * as C from "Const/Const";
import * as T from "Types/Types";

import { NextPage, GetServerSideProps } from "next";



const CustomerCenter: NextPage<T.CustomerCenterProps> = ({ faqType }) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <QuestionContainer faqType={faqType}/>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const faqType = await H.useFetch(C.FAQTYPE_API);
  return {
    props: {
      faqType: faqType.qaTypes,
    },
  };
};

export default CustomerCenter;
