// Hooks useFetch 사용예시를 보여주는 예시용 컴포넌트입니다.

import * as C from '/Const/Const';
import * as H from '/Hooks/index.ts';
import { useState, useEffect } from 'react';

const APICompo = () => {
    const [CONCATEGORY_API, setCONCATEGORY_API] = useState([]);
    const [CONITEM_SOON_API,  setCONITEM_SOON_API] = useState([]);
    useEffect(() => {
        (async () => {
            let JsonData = await H.useFetch(C.CONCATEGORY_API);
            setCONCATEGORY_API(JsonData.conCategory1s);
            JsonData = await H.useFetch(C.CONITEM_API+C.SOON);
            setCONITEM_SOON_API(JsonData.conItems);
        })();
    },[]);
    return (
        <ul>
            <ul>
                <h3>CONCATEGORY_API</h3>
                {CONCATEGORY_API.map((e, index) => <li key={index}>{e.name}</li>)}
            </ul>
            <ul>
                <h3>CONITEM_SOON_API</h3>
                {CONITEM_SOON_API.map((e, index) => <li key={index}>{e.name}</li>)}
            </ul>
        </ul>
    )
}

export default APICompo