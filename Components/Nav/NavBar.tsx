import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import * as C from '/Const/Const';
import * as H from '/Hooks/Hooks.ts';
import * as T from '/Types/Types.ts';

const data = {
    id: 67,
    name: "카페",
    discountRate: 50,
    imageUrl: "https://d1dsr05o5i286u.cloudfront.net/a2402a35-038b-4b68-a152-2cc14dff532c.jpg"
  };
  

interface NavDataType{
  src: string;
  alt: string;
  width: string;
  height: string;
  href?: string | undefined;
}

const NavBar = (): JSX.Element => {
  const [Navdata, setNavData] = useState({});
  useEffect(()=>{
    (async()=> {
        const APIdata = await H.useFetch(C.CONCATEGORY_API);
        const temp = {};
        APIdata.conCategory1s.forEach(ele => {
          temp[ele.id] = ele.name;
        });
        setNavData(temp);
    })();
  },[]);
  
  const routerPath = useRouter().asPath;

  return (
    <nav>
      <Link href="/" passHref> 
        <div className="NavContainer">
            <a>
                <button>
                <Image src="/images/hamburgermenu.png" alt="seemore" width="50%" height="50%" />
                </button>
                <button>
                <Image src="/images/leftarrow.png" alt="seeback" width="50%" height="50%"  />
                </button>
            </a>
            <div>
                <p>{routerPath === '/'? "니콘내콘": Navdata[routerPath.slice(12)] }</p>
            </div>
        </div>
        
      </Link>
    </nav>
  );
};

export default NavBar;