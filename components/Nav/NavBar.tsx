import style from "./NavBar.module.css";
import css from "styled-jsx/css";
import Link from "next/link";
import Image from 'next/image'

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
        <Image src="/images/hamburgermenu.png" alt="seemore" width="100%" height="100%" />
        </button>
        <button>
        <Image src="/imgaes/leftarrow.png" alt="seeback" width="100%" height="100%"  />
        </button>
        </a>
        <div>
            니콘내콘  
        </div>
        </div>
        
      </Link>
    </nav>
  );
};

export default NavBar;
