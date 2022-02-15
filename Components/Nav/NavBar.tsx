import style from './NavBar.module.css';
import css from 'styled-jsx/css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, MouseEvent, TouchEvent } from 'react';
import * as C from 'Const/Const';
import * as H from 'Hooks/Hooks';
import * as T from 'Types/Types';
import NavSideBar from './NavSideBar';

const NavBar = (): JSX.Element => {
  const [Navdata, setNavData] = useState({});
  const [buttonClick, setButtonClick] = useState('');
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const CategoryData = H.useFetch(C.CONCATEGORY_API);
  const [NavdataList, setNavDataList] = useState<any[]>([]);
  const [APIFlag, setAPIFlag] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>();
  const [startX, setStartX] = useState<number>();
  const [moveX, setMoveX] = useState<number>();
  const [initialX, setInitialX] = useState<number>(0);
  type MouseEventType = MouseEvent<HTMLElement>;
  type TouchEventType = TouchEvent<HTMLElement>;
  useEffect(() => {
    (async () => {
      const APIdata = await H.useFetch(C.CONCATEGORY_API);
      const temp = {};
      if (APIFlag) {
        APIdata.conCategory1s.forEach((els: any) => {
          temp[els.id] = els.name;
          //setNavDataList(NavdataList.concat({ id: els.id, name: els.name }));
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

  const onImgDragStart = (e: MouseEventType) => {
    setStartX(e.pageX);
  };

  const handleTouchStart = (e: TouchEventType) => {
    e.stopPropagation();
    setStartX(e.changedTouches[0].pageX);
  };

  const onImgDragEnd = (e: MouseEventType) => {
    e.preventDefault();
    let endX = e.pageX;
    if (startX) {
      let diffX = endX - startX;
      if (Math.abs(diffX) > 20) {
        setMoveX(diffX);
        return;
      }
    }
  };
  const handleTouchEnd = (e: TouchEventType) => {
    e.stopPropagation();
    let endX = e.changedTouches[0].pageX;
    if (startX) {
      let diffX = endX - startX;
      if (Math.abs(diffX) > 20) {
        setMoveX(diffX);
        return;
      }
    }
  };

  const onSelectCategory = (index: number): void => {
    setSelected(index);
  };

  return (
    <>
      {isSideBarOpen ? (
        <div className={style.wrapperContainer}>
          <Link href="/" passHref>
            <div className={style.navContainer}>
              <a className={style.navIcon}>
                {routerPath === '/' ? (
                  <div onClick={helpCenterHandler}>
                    <Image
                      src="/images/hamburgermenu.png"
                      alt="seemore"
                      width="30px"
                      height="30px"
                      className={style.customerNavImage}
                    />
                  </div>
                ) : routerPath === '/CustomerCenter' ? (
                  <div>
                    <Image
                      src="/images/close.png"
                      alt="seeback"
                      className={style.customerNavImage}
                      width="20px"
                      height="20px"
                    />
                  </div>
                ) : (
                  <div>
                    <Image
                      src="/images/arrowback.png"
                      alt="seeback"
                      className={style.navImage}
                      width="30px"
                      height="30px"
                    />
                  </div>
                )}
              </a>
              <div>
                <p>
                  {routerPath === '/'
                    ? '니콘내콘'
                    : routerPath === '/CustomerCenter'
                    ? '고객센터'
                    : Navdata[routerPath.slice(12)]}
                </p>
              </div>
              <div className={style.noneImage}></div>     
            </div>
          </Link>
          <section className={style.TopCategories}>
            <div className={style.subTitleWrapper}>
              <div
                className={style.NavdataList}
                onMouseDown={onImgDragStart}
                onMouseUp={onImgDragEnd}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                  transition: 'transform 0.5s ease',
                  transform: `translate(${moveX}px)`,
                }}
              >
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
                    {routerPath === '/' ? null : (
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
        </div>
      ) : (
        <NavSideBar setSideBarOpen={setSideBarOpen} />
      )}
    </>
  );
};
export default NavBar;
