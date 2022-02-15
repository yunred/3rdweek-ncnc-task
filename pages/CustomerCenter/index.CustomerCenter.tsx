import { NextPage } from "next";
import style from "styles/CustomerCenter.module.css";
import { useState } from 'react';

enum CustomerCenterContent {
  title = "상담시간 안내",
  time = "평일 10:00 - 18:00",
  description = "점심시간 12:30 - 13:30 / 토 • 일 • 공휴일 휴무",
  tabTitle = "자주 묻는 질문",
  sell = "판매",
  buy = "구매",
  left = 0,
  right = 1,
  Q = "Q",
}

const setColor = {color:`#f75656`,borderBottom: `2px solid #f75656`};
const setDefaultColor = {color:`#333333`,borderBottom: `none`};

const CustomerCenter: NextPage = () => {

  const [tab,setTab] = useState<number>(0);

  return (
    <div className={style.Container}>
      <div className={style.header}>
        <h2>{CustomerCenterContent.title}</h2>
        <h3>{CustomerCenterContent.time}</h3>
        <p>{CustomerCenterContent.description}</p>
      </div>
      <div className={style.divider}/>
      <div className={style.middle}>
        <h2>{CustomerCenterContent.tabTitle}</h2>
        <div className={style.tabZone}>
          <button style={tab === CustomerCenterContent.left ? setColor : setDefaultColor} onClick={()=>{setTab(CustomerCenterContent.left)}} className={style.tabLeft}>{CustomerCenterContent.buy}</button>
          <button style={tab === CustomerCenterContent.right ? setColor : setDefaultColor} onClick={()=>{setTab(CustomerCenterContent.right)}} className={style.tabRight}>{CustomerCenterContent.sell}</button>
        </div>
      </div>
      <div className={style.divider}/>
      <div className={style.body}>
      </div>
    </div>
  );
};

export default CustomerCenter;
