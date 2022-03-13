import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect, useState, useCallback } from 'react';

import * as H from 'Hooks/Hooks';
import * as C from 'Const/Const';
import * as T from 'Types/Types';

import styles from 'styles/Item.module.css';
import ItemContainer from 'Components/ItemContainer/index.ItemContainer';

import NavBar from 'Components/Nav/NavBar';

interface ItemPageProps {
  currentId: number;
}

const Items = ({ currentId }: ItemPageProps) => {
  const [itemData, setItemData] = useState<T.ItemProps>();
  const FetchItem = useCallback(async () => {
    const res = await H.Fetch(`${C.CONITEM_API}/${currentId}`);
    setItemData(res.conItem);
  }, [currentId]);
  useEffect(() => {
    FetchItem();
  }, [FetchItem]);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          {itemData && <ItemContainer itemData={itemData} />}
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const currentId = context.params ? context.params.id : undefined;

  return {
    props: {
      currentId: currentId,
    },
  };
};

export default Items;
