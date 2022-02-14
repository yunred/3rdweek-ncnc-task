// Hooks useFetch 사용예시를 보여주는 예시용 컴포넌트입니다.
import { GetServerSideProps  } from 'next';
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';
import { useState, useEffect } from 'react';
import { useFetch } from '../../Hooks/Hooks';

const APICompo = ({ GetProductProps, GetCategoryProps}) => {
    return (
        <ul>
            <ul>
                <Category data= {GetCategoryProps.conCategory1s}/>
                <ProductList data = {GetProductProps.conItems}/>
                <FAQList/>
            </ul>
        </ul>
    )
}

const Category = ({ data }:T.CategoryType):JSX.Element => {
    return(
        <>
        <h3>StaticProps</h3>
        <h4>카테고리</h4>
        {data.map((e, index) => <li key={index}>{e.name}</li>)}
        </>
    );
}

const ProductList = ({ data }) => {
    return(
        <>
        <h3>ProductLIst</h3>
        {data.map((e, index) => <li key={index}>{e.name}</li>)}
        </>
    )
}

const FAQList = () => {
    const [fetchData, setFetchData] = useState([]);
    useEffect(()=>{
        (async()=> {
            const APIdata = await useFetch(C.FAQCONTENT_API + '1'); 
            setFetchData(APIdata.qas);
        })();
    }, [])
    return(
        <>
            <h3>QNA</h3>
            {fetchData.map((e, index) => <ul key={index}>
                <li>Q: {e.question}</li>
                <li>A: {e.answer}</li>
            </ul>)}
        </>
    )

}

export default APICompo