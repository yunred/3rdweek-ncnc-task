import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'
import * as T from '/Types/Types.ts';
import axios from "axios";
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
  conCategory1s: any;
}

const NavBar = ({CategoryData}: {CategoryData: T.CategoryProps},NavData:NavDataType): JSX.Element => {
  return (
    <>
        <div className={style.navContainer}>
            <div className={style.navContents}>
                <a className={style.link} href="www.naver.com">
                    <div className="imageBox">
                        <Image src="/images/hamburgermenu.png" alt="seemore" width="18px" height="20px" className="imageContents"/>
                    </div>
                </a>

                    <div className={style.categories}>
                        니콘내콘
                    </div>
                <div className={style.NullBox} />
            </div>

            <ul className={style.navDetailContents} >
            {CategoryData &&  CategoryData.map((item: T.CategoryProps,index :number) => {
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
