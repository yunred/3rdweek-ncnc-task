import style from './NavBar.module.css';
import css from 'styled-jsx/css';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useState, useEffect, MouseEvent, TouchEvent } from 'react';
import * as C from 'Const/Const';
import * as H from 'Hooks/Hooks';
import * as T from 'Types/Types';
import NavSideBar from './NavSideBar';

interface propsTypes {
  brandName?: string;
}

type tempType = Record<string, string>;
type NavdataType = Record<string, string>;

const NavBar = ({ brandName }: propsTypes): JSX.Element => {
  const [Navdata, setNavData] = useState<NavdataType>({});
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const [NavdataList, setNavDataList] = useState<any[]>([]);
  const [APIFlag, setAPIFlag] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>();
  const [startX, setStartX] = useState<number>();
  type MouseEventType = MouseEvent<HTMLElement>;
  type TouchEventType = TouchEvent<HTMLElement>;
  useEffect(() => {
    (async () => {
      const APIdata = await H.Fetch(C.CONCATEGORY_API);
      const temp: tempType = {};
      if (APIFlag) {
        APIdata.conCategory1s.forEach((els: any) => {
          temp[els.id] = els.name;
          NavdataList.push({ id: els.id, name: els.name });
          if (els.id === 128) {
            setAPIFlag(false);
            return;
          }
        });
        setNavData(temp);
      }
    })();
  }, []);

  const routerPath = useRouter().asPath;
  useEffect(() => {
    setSelected(Number(routerPath.replace(/[^0-9]/g, '')));
  }, [routerPath]);

  const helpCenterHandler = () => {
    setSideBarOpen(false);
  };

  const onSelectCategory = (index: number): void => {
    setSelected(index);
  };
  return (
    <>
      {isSideBarOpen ? (
        <div className={style.wrapperContainer}>
          <div className={style.navContainer}>
            <a className={style.navIcon}>
              {routerPath === '/' ? (
                <Link href="/" passHref>
                  <div onClick={helpCenterHandler}>
                    <Image
                      src="/images/hamburgermenu.png"
                      alt="seemore"
                      width="30px"
                      height="30px"
                    />
                  </div>
                </Link>
              ) : routerPath === '/contacts' ? (
                <Link href="/" passHref>
                  <div className={style.navImage}>
                    <Image
                      src="/images/close.png"
                      alt="seeback"
                      width="20px"
                      height="20px"
                    />
                  </div>
                </Link>
              ) : (
                <div className={style.navImage} onClick={() => Router.back()}>
                  <Image
                    src="/images/arrowback.png"
                    alt="seeback"
                    width="30px"
                    height="30px"
                  />
                </div>
              )}
            </a>
            <div>
              <p>
                {brandName
                  ? brandName
                  : routerPath === '/'
                  ? '니콘내콘'
                  : routerPath === '/contacts'
                  ? '고객센터'
                  : Navdata[routerPath.slice(12)]}
              </p>
            </div>
            <div className={style.noneImage}></div>
          </div>
          {routerPath == '/' ||
          routerPath == '/contacts' ||
          /\/items/.test(routerPath) ||
          brandName ? (
            <></>
          ) : (
            <section className={style.TopCategories}>
              <div className={style.subTitleWrapper}>
                <div className={style.NavdataList}>
                  {NavdataList.map((e, idx: number) => (
                    <button
                      key={e.id}
                      className={style.NavdataItem}
                      onClick={() => {
                        onSelectCategory(e.id);
                      }}
                      style={{
                        borderBottom: `${
                          selected === e.id ? 'solid 2px #ff5757' : '#ffffff'
                        }`,
                      }}
                    >
                      {routerPath === '/' ? null : routerPath ===
                        '/contacts' ? null : (
                        <Link href={`/categories/${e.id}`}>
                          <span
                            className={style.CategoryText}
                            style={{
                              color: `${
                                selected === e.id ? '#ff5757' : '#000000'
                              }`,
                            }}
                          >
                            {e.name}
                          </span>
                        </Link>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        <NavSideBar setSideBarOpen={setSideBarOpen} />
      )}
    </>
  );
};
export default NavBar;
