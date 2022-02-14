// Hooks useFetch 사용예시를 보여주는 예시용 컴포넌트입니다.
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';
import { useState, useEffect } from 'react';

const APICompo = ({ ConItems }:T.APICompoProps) => {
    
    return (
        <ul>
            <ul>
                {/* <StaticProps data= {InititalProps.conCategory1s}/> */}
                <ContentsItem ConItems={ConItems} />
            </ul>
        </ul>
    )
}

// export const StaticProps = ({ data }:T.CategoryType):JSX.Element => {
//     return(
//         <>
//         <h3>StaticProps</h3>
//         <h4>카테고리</h4>
//         {data.map((e, index) => <li key={index}>{e.name}</li>)}
//         </>
//     );
// }


const ContentsItem = ({ data }:T.CategoryType, e:any, index:number):JSX.Element => {
    console.log("하이", data)
    return(
        <>
        <h3>StaticProps</h3>
        <h4>카테고리</h4>
        {data.map((e, index) => <li key={index}>{e.name}</li>)}
        </>
    );
}

export default APICompo