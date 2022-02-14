import type { NextPage } from 'next';
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import styles from '../styles/Home.module.css';
import CategoryContainer from '/Components/CategoryContainer/index.CategoryContainer';
import ProductContainer from '/Components/ProductContainer/index.ProductContainer';

const Home: NextPage = ({ menuCategory, productContent }: any) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CategoryContainer CategoryData={menuCategory.conCategory1s} />
        <div className={styles.middleContent}>
          <span className={styles.contentMessage1}>놓치지 마세요</span>
          <span className={styles.contentMessage2}>오늘의 땡처리콘!</span>
        </div>
        <ProductContainer ProductData={productContent.conItems} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const menuCategory = await H.useFetch(C.CONCATEGORY_API);
  const productContent = await H.useFetch(`${C.CONITEM_API}/${C.SOON}`);

  return {
    props: {
      menuCategory: menuCategory,
      productContent: productContent,
    },
  };
};

export default Home;
