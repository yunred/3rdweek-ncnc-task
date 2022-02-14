import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'

const data = {
    conCategory1s: [
        {   
            id: 67,
            name: "카페",
            discountRate: 50,
            imageUrl: "https://d1dsr05o5i286u.cloudfront.net/a2402a35-038b-4b68-a152-2cc14dff532c.jpg"
        },
        {
            id: 62,
            name: "편의점,마트",
            discountRate: 51,
            imageUrl : "https://d1dsr05o5i286u.cloudfront.net/bdaf1959-6c65-496b-bcc6-b06147ebd44f.jpg"
        },
    ]
}

  
interface NavDataType{
  key: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  href?: string | undefined;
}

const NavBar = (NavData:NavDataType): JSX.Element => {
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
                <div className={style.Categories} >
                    {data.conCategory1s[0].name}
                </div>
                <div className={style.NullBox} />
            </div>
            <ul className={style.NavDetailContents} >
               <li>{data.conCategory1s[0].name}</li> 
               <li>{data.conCategory1s[1].name}</li> 
            </ul>
        </div>
    </>
  );
};

export default NavBar;
