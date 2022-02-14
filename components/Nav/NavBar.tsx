import Link from "next/link";
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>
        <button>
        <Image src="/images/hamburgermenu.png" alt="seemore" />
        </button>
        <button>
        <Image  src="/imgaes/arrowback.png" alt="seemore" />
        </button>
        </a>
        
      </Link>
    </nav>
  );
};

export default NavBar;
