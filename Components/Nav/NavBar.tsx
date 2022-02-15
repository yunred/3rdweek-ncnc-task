import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import * as C from 'Const/Const';
import * as H from 'Hooks/Hooks';
import * as T from 'Types/Types';

const SubNavData = [
  {
    idx: 0,
    title : "땡철이",
  },
  {
    idx: 1,
    title : "카페",
  },
  {
    idx: 2,
    title : "편의점,마트",
  },
  {
    idx: 3,
    title : "빵,아이스크림",
  },
  {
    idx: 4,
    title : "피자,햄버거,치킨",
  },
  {
    idx: 5,
    title : "문화,게임,영화",
  },
  {
    idx: 6,
    title : "외식,분식",
  },
  {
    idx: 7,
    title : "백화점,주유,뷰티",
  },
  {
    idx: 8,
    title : "휴대폰 데이터",
  },
];

const NavBar = (): JSX.Element => {
  const [Navdata, setNavData] = useState({});

  useEffect(()=>{
    (async()=> {
        const APIdata = await H.useFetch(C.CONCATEGORY_API);
        const temp = {};
        APIdata.conCategory1s.forEach((els : any) => {
          temp[els.id] = els.name;
        });
        setNavData(temp);
    })();
  },[]);
  
  const routerPath = useRouter().asPath;

  return (
    <div className={style.wrapperContainer}>
          <div >
              <Link href="/" passHref> 
                <div className={style.navContainer}>
                    <a className={style.navIcon} >{routerPath === '/'?  <div>
                        <Image src="/images/hamburgermenu.png" alt="seemore" width="30px" height="30px" />
                        </div> :   <div>
                        <Image src="/images/arrowback.png" alt="seeback" className={style.NavImage} width="30px" height="30px"/>
                        </div> }               
                    </a>
                    <div>
                        <p>{routerPath === '/'? "니콘내콘": Navdata[routerPath.slice(12)]  }</p>
                    </div>
                    <div></div>
                </div>
              </Link>
          </div>
          <div className="Wrapper">
              {SubNavData.map((e, idx:number)=><p key={e.idx} >{routerPath === '/'? null : <div>{e.title}</div> }</p>)}      
          </div>
    </div>
  );
}
export default NavBar;