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
  buy = "구매하기"
}

const getTimes = (str: string): string => {
  const [week, month, day, year] = str.split(" ");

  let result = year + "년 ";

  switch (month) {
    case "JAN":
      result += "1월";
      break;
    case "FEB":
      result += "2월";
      break;
    case "MAR":
      result += "3월";
      break;
    case "APR":
      result += "4월";
      break;

    case "MAY":
      result += "5월";
      break;
    case "JUN":
      result += "6월";
      break;
    case "JUL":
      result += "7월";
      break;
    case "AUG":
      result += "8월";
      break;

    case "SEP":
      result += "9월";
      break;
    case "OCT":
      result += "10월";
      break;
    case "NOV":
      result += "11월";
      break;
    case "DEC":
      result += "12월";
      break;
  }

  return (result += " " + day + "일 까지");
};

const getPrice = (str: string): string => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};

const open = { transform: `translateY(500px)` };
const close = { transform: `translateY(-330px)` };

const Option = ({ options, discountRate }: OptionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [item,setItem] = useState<Item>();

  const handleSelect = (item:T.Options) =>{
    const newState = {
      expireAt : item.expireAt,
      price: item.sellingPrice,
    }
    setItem(newState)
    setIsOpen(!isOpen);
  }

  return (
    <div style={{background : `${isOpen ? "#ccc" :"#f75656"}`}} className={style.container}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={style.title}
      >
      {isOpen ? optionsContent.title: optionsContent.buy}
      </div>
      {item && <div className={style.selectedItem}>
        <p>{getTimes(item.expireAt)}/{getPrice(item.price)}</p>
        <button onClick={()=>{setItem("")}}>X</button></div> }
      <div className={style.overflowContainer}>
        <div style={isOpen ? open : close} className={style.innerContainer}>
          <div className={style.innerTitle}></div>
          <ul>
            {options &&
              options.map((item, index) => {
                return (
                  <li onClick={()=>{handleSelect(item)}} key={index} className={style.selectContainer}>
                    <div className={style.leftZone}>
                      <div className={style.leftZoneTitle}>
                        <p>{optionsContent.expire}</p>
                        <p>{optionsContent.discountPrice}</p>
                      </div>
                      <div className={style.leftZoneContent}>
                        <p>{getTimes(item.expireAt)}</p>
                        <p>{getPrice(item.sellingPrice)}</p>
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
  );
};

export default Option;
