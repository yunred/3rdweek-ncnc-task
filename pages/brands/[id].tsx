import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import styles from '/styles/Categories.module.css'
import * as C from "/Const/Const";
import * as H from "/Hooks/Hooks.ts";
import { useState, useEffect } from 'react';
import ProductContainer from 'Components/ProductContainer/index.ProductContainer';

const brands: NextPage = ({ allCategors, currentPage, curruntID, BrandList }) => {
    const [brandsList, setBrandsList] = useState([]);
    const [PH, setPH] = useState([]);
    const [brandProductList, setbrandProductList] = useState([]);
    const [productInfo, setproductInfo] = useState({});
    const [containerProps, setContainerProps] = useState([]);
    const router = useRouter();
    useEffect(()=>{
        (async()=> {
            for(let idx = 0; idx < allCategors.length; idx ++){
                if (allCategors[idx].id === 1){
                    continue;
                }
                const APIdata = await H.useFetch(C.CONCATEGORY_API + allCategors[idx].id + C.NESTED);
                setPH( [...APIdata.conCategory1.conCategory2s] );   
            }
        })();
    }, [])
    useEffect(()=> {  
        setBrandsList([...brandsList, ...PH]);
        const propsidx = brandsList.findIndex(e=> e.id === parseInt(curruntID));
        const temp = propsidx !== -1? brandsList[propsidx].conItems: [];
        setbrandProductList(temp);
    }, [PH])
    useEffect(()=> {
        brandProductList.forEach(async product=> {
            const APIdata = await H.useFetch(C.CONITEM_API + product.id);
            setproductInfo(APIdata)
        })
    }, [brandProductList]);
    useEffect(() => {
        if(productInfo){
        const newstate = containerProps;
        newstate.push(productInfo.conItem);
        setContainerProps(newstate)
    }}, [productInfo])
    
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <ProductContainer ProductData = {containerProps.slice(1)}/>
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    )
  }
  
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const curruntID = context.params? context.params.id: undefined;
  let allCategors = await H.useFetch(C.CONCATEGORY_API);
  allCategors = allCategors.conCategory1s;
 

  return {
    props: {
        allCategors: allCategors,
        currentPage: 'brands',
        curruntID: curruntID,
    },
  };
};


  export default brands