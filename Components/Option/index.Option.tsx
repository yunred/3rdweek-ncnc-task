import style from "Components/Option/Option.module.css";
import * as T from "Types/Types";
import { useState } from "react";

interface OptionProps {
  options: T.Options[];
  discountRate: number;
}

interface Item {
  expireAt: string;
  price: string;
}

enum optionsContent {
  title = "옵션 선택하기",
  expire = "유효기간",
  discountPrice = "할인가",
  year = "년 ",
  month = "월 ",
  day = "일 까지",
  buy = "구매하기",
}

const getTimes = (str: string) => {
  const date = new Date(str);

  const YYYY = date.getFullYear();
  let mm = String(date.getMonth() + 1);
  let dd = String(date.getDate());
  
  if(parseInt(dd) < 10){
    dd = '0'+dd;
  }

  return `${YYYY}년 ${mm}월 ${dd}일 까지`;
};

const getPrice = (str: string): string => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

const close = { bottom: `100px` };
const open = { bottom: `-30px` };

const closeBg = { transform: `translateY(0px)` };
const openBg = { transform: `translateY(calc(-100vh - 80px))` };

const Option = ({ options, discountRate }: OptionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Item | null>();

  const handleSelect = (item: T.Options) => {
    const newState = {
      expireAt: item.expireAt,
      price: item.sellingPrice,
    };
    setItem(newState);
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ background: `${isOpen ? "#ccc" : "#f75656"}` }}
      className={style.container}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={style.title}
      >
        {isOpen || item ? optionsContent.buy : optionsContent.title}
      </div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={isOpen ? openBg : closeBg}
        className={style.blackBg}
      >
        <div
          style={{ bottom: isOpen ? "200px" : "0" }}
          className={style.innerTitle}
        >
          <span>{optionsContent.title}</span>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            X
          </button>
        </div>
        {item && (
          <div
            className={style.selectedItem}
            onClick={() => {
              setItem(null);
            }}
          >
            <p>
              {item.expireAt !== undefined && getTimes(item.expireAt)}/
              {item.price !== undefined && getPrice(item.price)}
            </p>
            <button>X</button>
          </div>
        )}
        <div className={style.overflowContainer}>
          <div className={style.innerContainer}>
            <ul style={isOpen ? open : close}>
              {options &&
                options.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        handleSelect(item);
                      }}
                      key={index}
                      className={style.selectContainer}
                    >
                      <div className={style.leftZone}>
                        <div className={style.leftZoneTitle}>
                          <p>{optionsContent.expire}</p>
                          <p>{optionsContent.discountPrice}</p>
                        </div>
                        <div className={style.leftZoneContent}>
                          {item !== undefined && (
                            <p>
                              {item.expireAt !== undefined &&
                                getTimes(item.expireAt)}
                            </p>
                          )}
                          {item !== undefined && (
                            <p>
                              {item.sellingPrice && getPrice(item.sellingPrice)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className={style.rightZone}>
                        <span>{discountRate}%</span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
