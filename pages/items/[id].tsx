import { useEffect, useState, useCallback } from 'react';

import * as H from 'Hooks/Hooks';
import * as C from 'Const/Const';
import * as T from 'Types/Types';

import styles from 'styles/Item.module.css';
import ItemContainer from 'Components/ItemContainer/index.ItemContainer';
import { useRouter } from 'next/router';
import NavBar from 'Components/Nav/NavBar';

const Items = () => {
  const [itemData, setItemData] = useState<T.ItemProps>();
  const router = useRouter();
  const [currentId, setCurrentId] = useState<number>();
  const FetchItemData = useCallback(async () => {
    const res = await H.Fetch(`${C.CONITEM_API}/${currentId}`);
    setItemData(res.conItem);
  }, [currentId]);
  useEffect(() => {
    if (router.query.id && typeof router.query.id !== 'object') {
      setCurrentId(parseInt(router.query.id));
      if (currentId !== undefined) {
        FetchItemData();
      }
    }
  }, [FetchItemData, currentId, router.query.id]);

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

export default Items;
