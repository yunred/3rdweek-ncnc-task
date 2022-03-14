import type {
  NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from 'next';
import { useRouter } from 'next/router';
import styles from 'styles/Categories.module.css';
import * as T from 'Types/Types';
import * as C from 'Const/Const';
import * as H from 'Hooks/Hooks';
import { useState, useEffect, useCallback } from 'react';
import CategoryContainer from 'Components/CategoryContainer/index.CategoryContainer';
import ProductContainer from 'Components/ProductContainer/index.ProductContainer';
import NavBar from 'Components/Nav/NavBar';
import { ProductProps } from 'Components/Types/ProductType';

interface CategoriesProps {
  currentPage: string;
  curruntID: string;
  categoryProps: any;
}

const Categories: NextPage<CategoriesProps> = ({
  currentPage,
  curruntID,
  categoryProps,
}) => {
  const [category1Props, setCategory1Props] = useState<
    ProductProps[] | undefined
  >();
  const FetchProductContent = useCallback(async () => {
    const res = await H.Fetch(`${C.CONITEM_API}/${C.SOON}`);
    setCategory1Props(
      res.conItems.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
    );
  }, []);
  useEffect(() => {
    FetchProductContent();
  }, [FetchProductContent]);
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          {curruntID !== '1' ? (
            <CategoryContainer
              CategoryData={categoryProps}
              currentPage={currentPage}
            />
          ) : (
            <ProductContainer ProductData={category1Props} />
          )}
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathList = ['1', '67', '62', '60', '61', '65', '129', '69', '128'];
  const paths = pathList.map((categoryItem: any) => ({
    params: { id: categoryItem.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const curruntID = context.params ? context.params.id : undefined;
  const categoryProps = await H.Fetch(C.CONCATEGORY_API + curruntID + C.NESTED);
  return {
    props: {
      currentPage: 'categories',
      curruntID: curruntID,
      categoryProps: categoryProps.conCategory1.conCategory2s,
    },
  };
};

export default Categories;
