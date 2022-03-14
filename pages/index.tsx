import type { GetStaticProps, NextPage } from 'next';
import * as C from 'Const/Const';
import styles from 'styles/Home.module.css';

import CategoryContainer from 'Components/CategoryContainer/index.CategoryContainer';
import ProductContainer from 'Components/ProductContainer/index.ProductContainer';
import Carousel from 'Components/Carousel/index.Carousel';

import * as H from 'Hooks/Hooks';
import * as T from 'Types/Types';

import { ProductProps } from 'Components/Types/ProductType';
import { useEffect, useState, useCallback } from 'react';
import NavBar from 'Components/Nav/NavBar';

interface HomeProps {
  menuCategory: T.CategoryListType[];
  currentPage: string;
}

const Home: NextPage<HomeProps> = ({ currentPage, menuCategory }) => {
  const [productContent, setProductContent] = useState<
    ProductProps[] | undefined
  >();
  const FetchProductContent = useCallback(async () => {
    const res = await H.Fetch(`${C.CONITEM_API}/${C.SOON}`);
    setProductContent(res.conItems);
  }, []);
  useEffect(() => {
    FetchProductContent();
  }, [FetchProductContent]);
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Carousel />
          <CategoryContainer
            CategoryData={menuCategory}
            currentPage={currentPage}
          />
          <div className={styles.middleContent}>
            <span className={styles.contentMessage1}>놓치지 마세요</span>
            <span className={styles.contentMessage2}>오늘의 땡처리콘!</span>
          </div>
          {productContent ? (
            <ProductContainer ProductData={productContent} />
          ) : null}
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const menuCategory = await H.Fetch(C.CONCATEGORY_API);

  return {
    props: {
      currentPage: 'home',
      menuCategory: menuCategory.conCategory1s,
    },
  };
};

export default Home;
