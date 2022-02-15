import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import styles from '/styles/Categories.module.css'
import * as C from "Const/Const";
import * as H from "Hooks/Hooks";
import { useState, useEffect } from 'react';
import ProductContainer from 'Components/ProductContainer/index.ProductContainer';
import css from 'styled-jsx/css';
import NavBar from 'Components/Nav/NavBar';

interface PropsType {
  allCategors:any,
  currentPage: string,
  curruntID: string,
  BrandList: []
}

const Brands = ({ allCategors, currentPage, curruntID, BrandList }: PropsType) => {
    const [brandsList, setBrandsList] = useState<any[]>([]);
    const [PH, setPH] = useState<any[]>([]);
    const [brandProductList, setbrandProductList] = useState([]);
    const [productInfo, setproductInfo] = useState<any>({});
    const [containerProps, setContainerProps] = useState<any[]>([]);
    const [sortMode, setSortMode] = useState('priority')
    const router = useRouter();
    useEffect(()=>{
        (async()=> {
            for(let idx = 0; idx < allCategors.length; idx ++){
                if (allCategors[idx].id === 1){
                    continue;
                }
                const APIdata = await H.Fetch(C.CONCATEGORY_API + allCategors[idx].id + C.NESTED);
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
    interface productType {id : string}
    useEffect(()=> {
        brandProductList.forEach(async (product:productType) => {
            const APIdata = await H.Fetch(C.CONITEM_API + product.id);
            setproductInfo(APIdata)
        })
    }, [brandProductList]);
    useEffect(() => {
        if(productInfo.conItem){
        const newstate:any = containerProps;
        newstate.push(productInfo.conItem);
        setContainerProps(newstate)
    }}, [productInfo])
    return (
      <>
      <NavBar brandName = {containerProps[0] ? containerProps[0].conCategory2.name : undefined }/>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className='warpper'>
            {containerProps.length < 10? <div className="ProductStock"><span className='stock'>{`0${containerProps.length}`}</span>개의 상품</div>
            :<div className="ProductStock"><span className='stock'>{containerProps.length}</span >개의 상품</div>
            }
          </div>
          <ProductContainer ProductData = {containerProps} isItemList = {true}/>
        </main>
        <footer className={styles.footer}>
          
        </footer>
        <style jsx>{`
          .warpper{
            width: 100%;
            padding: 10px;
            display: flex;
            background-color: #fff;
          }

          .ProductStock{
            flex-grow: 1;
            align-self: center;
            color: #808080;
            font-family: Apple SD Gothic Neo;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
          }
          .stock{
            color: #303030;
            font-size: 16px;
            font-weight: 600;
          }
          }
        `}</style>
      </div>
      </>
      
    )
  }
  
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const curruntID = context.params? context.params.id: undefined;
  let allCategors = await H.Fetch(C.CONCATEGORY_API);
  allCategors = allCategors.conCategory1s;
 

  return {
    props: {
        allCategors: allCategors,
        currentPage: 'brands',
        curruntID: curruntID,
    },
  };
};


  export default Brands