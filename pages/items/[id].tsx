import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEffect, useState } from 'react';

import * as H from 'Hooks/Hooks';
import * as C from 'Const/Const'

interface itemsProps {
  currentId: number;
}

const Items: NextPage<itemsProps> = ({ currentId }) => {

  const [itemData,setItemData] = useState({});

  useEffect(()=>{
    (async()=> {
      const res = await H.useFetch(`${C.CONITEM_API}/${currentId}`);
      setItemData(res.conItem);
    })();
}, [])

  return <div>

  </div>;
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
