import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';

// interface NavDataType{
//   key?: string | number;
//   map: string;
//   src: string;
//   alt: string;
//   width: string;
//   height: string;
//   href?: string | undefined;
//   items: string;
//   Navdata: string[];
//   temp: any;
//   id: number;
// }

interface CategoryProps {
  id: number;
  name: string;
}


const NavBar = (): JSX.Element => {
  const [Navdata, setNavData] = useState({});

  useEffect(()=>{
    (async()=> {
        const APIdata = await H.useFetch(C.CONCATEGORY_API);
        const temp = {};
        APIdata.conCategory1s.forEach(e => {
          temp[e.id] = e.name;
        });
        setNavData(temp);
    })();
  },[]);
  
  const routerPath = useRouter().asPath;

  return (
    <div className={style.TotalContainer}>
          <div >
              <Link href="/" passHref> 
                <div className={style.NavContainer}>
                    <a className={style.NavImage} >{routerPath === '/'?  <div>
                        <Image src="/images/hamburgermenu.png" alt="seemore" width="30px" height="30px" />
                        </div> :   <div>
                        <Image src="/images/arrowback.png" alt="seeback" className={style.NavImage} width="30px" height="30px"/>
                        </div> }               
                    </a>
                    <div>
                        <p>{routerPath === '/'? "니콘내콘": Navdata[routerPath.slice(12)] }</p>
                    </div>
                    <div></div>
                </div>
              </Link>
          </div>
          <div>
              <p>{routerPath === '/'? null : Navdata[routerPath.slice(12)]  }</p>      
          </div>
    </div>
  );
}
export default NavBar;