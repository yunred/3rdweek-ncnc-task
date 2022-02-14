import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import * as C from "../../Const/Const";
import * as H from "../../Hooks/index";
import { useState, useEffect } from 'react';



interface NavDataType{
  key?: string | number;
  map: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  href?: string | undefined;
  items: string;
}

const NavBar = (NavData:NavDataType): JSX.Element => {
    const [CONCATEGORY_API, setCONCATEGORY_API] = useState([]);

    useEffect(()=> {
        (async () => {
            let JsonDatas = await H.useFetch(C.CONCATEGORY_API);
            setCONCATEGORY_API(JsonDatas.conCategory1s);
        })();
    },[])

  return (
    <>
        <div className={style.NavContainer}>
            <div className={style.NavContents}>
                <a className={style.link}>
                    <button>
                    <Image src="/images/hamburgermenu.png" alt="seemore" width="50%" height="50%" />
                    </button>
                    <button>
                    <Image src="/imgaes/leftarrow.png" alt="seeback" width="50%" height="50%"  />
                    </button>
                </a>
                {CONCATEGORY_API.map((e, index) => {
                <div className={style.Categories} key={index} >
                   {e.name}
                </div>
                })}
                <div className={style.NullBox} />
            </div>

            <ul className={style.NavDetailContents} >
                {CONCATEGORY_API.map((e, index) => {
                    <li className={style.item} key={index}>
                        {e.name}
                    </li>
                })}
            </ul>
        </div>
    </>
  );
};

export default NavBar;
