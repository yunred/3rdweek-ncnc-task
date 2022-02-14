// Hooks useFetch 사용예시를 보여주는 예시용 컴포넌트입니다.

import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';
import { useState, useEffect } from 'react';

const APICompo = ({ InititalProps }:T.APICompoProps) => {
    console.log(InititalProps);
    
    return (
        <ul>
            <ul>
                <StaticProps data= {InititalProps}/>
            </ul>
        </ul>
    )
}

export const StaticProps = ({ data }:T.CategoryType):JSX.Element => {
    console.log(data);
    return(
        <>
        <h3>InitialProps</h3>
        <h4>카테고리</h4>
        </>
    )
}


/*
    const [CONCATEGORY_API, setCONCATEGORY_API] = useState([]);
    const [CONITEM_SOON_API,  setCONITEM_SOON_API] = useState([]);
    useEffect(() => {
        (async () => {
            let JsonData = await H.useFetch(C.CONCATEGORY_API);
            console.log(JsonData);
            setCONCATEGORY_API(JsonData.conCategory1s);
            JsonData = await H.useFetch(C.CONITEM_API+C.SOON);
            setCONITEM_SOON_API(JsonData.conItems);
        })();
    },[]);



    <ul>
                <h3>CONITEM_SOON_API</h3>
                {CONITEM_SOON_API.map((e, index) => <li key={index}>{e.name}</li>)}
            </ul>

*/

export default APICompo