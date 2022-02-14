import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'

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

const NavBar = (NavData:NavDataType): JSX.Element => {
  return (
    <nav>
      <Link href="/" passHref> 
        <div className="NavContainer">
            <a>
                <button>
                <Image src="/images/hamburgermenu.png" alt="seemore" width="50%" height="50%" />
                </button>
                <button>
                <Image src="/imgaes/leftarrow.png" alt="seeback" width="50%" height="50%"  />
                </button>
            </a>
            <div>
                <p>{data.name}</p>
            </div>
        </div>
        
      </Link>
    </nav>
  );
};

export default NavBar;