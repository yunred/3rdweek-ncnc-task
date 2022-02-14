import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import * as C from "/Const/Const.ts";
import * as H from "/Hooks/Hooks.ts";
import * as T from '/Types/Types.ts';
import { useState, useEffect } from 'react';

const CategoryData = {
    conCategory1s: [
      {
        id: 1,
        name: "땡철이",
        discountRate: 31,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg",
      },
      {
        id: 67,
        name: "카페",
        discountRate: 50,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/a2402a35-038b-4b68-a152-2cc14dff532c.jpg",
      },
      {
        id: 62,
        name: "편의점,마트",
        discountRate: 51,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/bdaf1959-6c65-496b-bcc6-b06147ebd44f.jpg",
      },
      {
        id: 60,
        name: "빵,아이스크림",
        discountRate: 32,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/bf6a8e6a-d483-47cd-a77b-c74623740eda.jpg",
      },
      {
        id: 61,
        name: "피자,햄버거,치킨",
        discountRate: 48,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/cc29f4ed-ae75-466f-8037-4262a297f873.jpg",
      },
      {
        id: 65,
        name: "문화,게임,영화",
        discountRate: 71,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/491a4b6f-8915-4913-8f76-7352bf2c90a3.jpg",
      },
      {
        id: 129,
        name: "외식,분식",
        discountRate: 20,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/1941fa10-b201-4102-b7e8-ce0530f2771d.jpg",
      },
      {
        id: 69,
        name: "백화점,주유,뷰티",
        discountRate: 25,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/4787c169-fab4-4895-8d88-34ed02848fab.jpg",
      },
      {
        id: 128,
        name: "휴대폰 데이터",
        discountRate: 15,
        imageUrl:
          "https://d1dsr05o5i286u.cloudfront.net/1a4b3d0b-8e68-4fe8-b92c-38bde2e6f3d5.jpg",
      },
    ],
  };

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
    useEffect(() => {
        (async () => {
            let JsonData = await H.useFetch(C.CONCATEGORY_API);
            setCONCATEGORY_API(JsonData.conCategory1s);
        })();
    },[]);


  return (
    <>
        <div className={style.navContainer}>
            <div className={style.navContents}>
                <a className={style.link} href="/">
                    <div className="imageBox">
                        <Image src="/images/hamburgermenu.png" alt="seemore" width="18px" height="20px" className="imageContents"/>
                    </div>
                    <div className="imageBox">
                        <Image src="/imgaes/leftarrow.png" alt="seeback" width="18px" height="20px" />
                    </div>
                </a>

                    <div className={style.categories}>
                        니콘내콘
                        {/* {CategoryData.conCategory1s[0].name} */}
                    </div>
                <div className={style.NullBox} />
            </div>

            <ul className={style.navDetailContents} >
                {CategoryData.conCategory1s.map((item: T.CategoryProps,index :number) => {
                    return(
                        <li className={style.item} key={index}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
  );
};

export default NavBar;
