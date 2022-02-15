import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";

import * as H from "Hooks/Hooks";
import * as C from "Const/Const";

import styles from "styles/CustomerCenter.module.css";
import ItemContainer from "Components/ItemContainer/index.ItemContainer";
import * as T from "Types/Types";

import NavBar from 'Components/Nav/NavBar';

interface ItemPageProps {
  currentId: number;
}

const Items: NextPage<ItemPageProps> = ({ currentId }) => {
  const [itemData, setItemData] = useState<T.ItemProps>();

  console.log(itemData);

  useEffect(() => {
    (async () => {
      const res = await H.useFetch(`${C.CONITEM_API}/${currentId}`);
      setItemData(res.conItem);
    })();
  }, []);

  return (
    <>
    <NavBar/>
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
