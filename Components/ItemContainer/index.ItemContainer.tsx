import { useEffect, useState } from "react";

import * as T from "Types/Types";

import style from "Components/ItemContainer/ItemContainer.module.css";
import Option from "Components/Option/index.Option";
import ProductContent from 'Components/ProductContent/index.ProductContent';

interface ItemContainerProps {
  itemData: T.ItemProps;
}

enum info {
  warning = "유의사항",
  market = "사용 불가 매장",
  refund = "환불규정",
}

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
        <ProductContent ProductData={itemData}/>
      <div className={style.body}>
        <div>
          <h4 className={style.listHeader}>{info.warning}</h4>
          {warningData && <Warning warnList={warningData.warn} />}
          <h4>{info.market}</h4>
          {warningData && <Warning warnList={warningData.market} />}
          <h4>{info.refund}</h4>
          {warningData && <Warning warnList={warningData.refund} />}
        </div>
      </div>
    </div>
  );
};

const Warning = ({ warnList }: { warnList: string[] }) => {
  return (
    <ul className={style.warnList}>
      {warnList.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ItemContainer;
