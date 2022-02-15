import style from "Components/ItemContainer/ItemContainer.module.css";

import * as T from "Types/Types";

interface ItemContainerProps {
  itemData: T.ItemProps;
}

/*
브랜드명(brandName): itemData.conCategory2.name
상품명(productName): itemData.name 
할인율(disCountRate): itemData.discountRate
가격 (originalPrice): itemData.originalPrice
할인된가격(ncSellingPrice | minSellingPrice)
유의사항,환불규정(warning) : itemData.warning
이미지(image) : itemData.imageUrl
*/

const getPrice = (str: number): string => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ItemContainer = ({ itemData }: ItemContainerProps) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerImgContainer}>
          <img className={style.headerImg} src={itemData.imageUrl} />
        </div>
        <div className={style.headerContent}>
          <h3>{itemData.conCategory2.name}</h3>
          <h2>{itemData.name}</h2>
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
      <div className={style.body}>{itemData.warning}</div>
    </div>
  );
};

export default ItemContainer;
