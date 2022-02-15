import style from "Components/ItemContainer/ItemContainer.module.css";

import * as T from "Types/Types";
import { useEffect, useState } from "react";

interface ItemContainerProps {
  itemData: T.ItemProps;
}

enum info {
  warning = "유의사항",
  market = "사용 불가 매장",
  refund = "환불규정",
}

const getPrice = (str: number): string => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

interface WarningData {
  warn: string[];
  market: string[];
  refund: string[];
}

const ItemContainer = ({ itemData }: ItemContainerProps) => {
  const [warningData, setWaningData] = useState<WarningData>();

  const getWarning = () => {
    const filteredData: string[] = itemData.warning
      .split("\n")
      .filter((el) => el.indexOf("-") !== -1);

    const warn = [filteredData[0], filteredData[1]];
    const market = [filteredData[2]];
    const refund = [filteredData[3], filteredData[4]];

    const newData = {
      warn: warn,
      market: market,
      refund: refund,
    };

    setWaningData(newData);
  };

  useEffect(() => {
    getWarning();
  }, [itemData]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerImgContainer}>
          <img className={style.headerImg} src={itemData.imageUrl} />
        </div>
        <div className={style.headerContent}>
          <h3 className={style.brandName}>{itemData.conCategory2.name}</h3>
          <h2 className={style.productName}>{itemData.name}</h2>
          <div className={style.priceContainer}>
            <span className={style.discountRate}>
              {getPrice(itemData.discountRate)}%
            </span>
            <span className={style.discountPrice}>
              {getPrice(itemData.originalPrice)}원
            </span>
            <span className={style.originalPrice}>
              {getPrice(itemData.ncSellingPrice)}원
            </span>
          </div>
        </div>
      </div>
      <div className={style.body}>
        <h4 className={style.listHeader}>{info.warning}</h4>
        {warningData && <Warning warnList={warningData.warn} />}
        <h4>{info.market}</h4>
        {warningData && <Warning warnList={warningData.market} />}
        <h4>{info.refund}</h4>
        {warningData && <Warning warnList={warningData.refund} />}
      </div>
    </div>
  );
};

const Warning = ({ warnList }: {warnList:string[]}) => {
  return <ul className={style.warnList}>
    {
      warnList.map((item,index)=>{
        return <li key={index}>{item}</li>
      })
    }
  </ul>;
};

export default ItemContainer;
