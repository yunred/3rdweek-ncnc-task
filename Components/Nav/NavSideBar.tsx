import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'

const NavSideBar = (): JSX.Element => {
    const goBackHandler = () =>{
        window.location.reload(false);
    }

    return (

        <div className={style.sideBarwrapperContainer} onClick={goBackHandler}  >
                <div className={style.myPageWrap} >
                    <p>마이페이지</p>       
                </div>
                <div className={style.sideBarline} /> 

                <Link href={`/brands/63`} >
                        <a className={style.sideBarIcon} > 
                            <div> 고객센터 </div> 
                            <div> > </div> 
                        </a> 
                </Link>
                <div className={style.sideBarbottom} />        
                <div className={style.sideBarLastLine} onClick={goBackHandler} /> 
        </div>
    )
};

export default NavSideBar;