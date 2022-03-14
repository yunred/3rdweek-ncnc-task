import QuestionContainer from 'Components/QuestionContainer/index.QuestionContainer';
import styles from 'styles/Home.module.css';
import CustomerStyle from 'styles/CustomerCenter.module.css';

import * as H from 'Hooks/Hooks';
import * as C from 'Const/Const';
import * as T from 'Types/Types';

import { NextPage, GetStaticProps } from 'next';
import NavBar from 'Components/Nav/NavBar';

const CustomerCenter: NextPage<T.CustomerCenterProps> = ({ faqType }) => {
  return (
    <>
      <NavBar />
      <div className={CustomerStyle.container}>
        <main className={CustomerStyle.main}>
          <QuestionContainer faqType={faqType} />
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faqType = await H.Fetch(C.FAQTYPE_API);
  return {
    props: {
      faqType: faqType.qaTypes,
    },
  };
};

export default CustomerCenter;
