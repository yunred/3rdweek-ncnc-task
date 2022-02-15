import React from 'react';
import Image from 'next/image';
import style from 'Components/ProductContent/ProductContent.module.css';
import { ProductProps } from '../Types/ProductType';
import Link from 'next/link';
import * as T from 'Types/Types'
interface ProductContentProps{
  ProductData: ProductProps;
  isItemList?: boolean;
}

const ProductContent = (props: ProductContentProps) => {
  return (
    <>
      <div className={style.ContentWarpper}>
        {props.ProductData && (
          <Link href={`/items/${props.ProductData.id}`}>
            <a>
            <div className="container">
            <div className={style.Container}>
              <img
                className={style.ProductImg}
                src={props.ProductData.imageUrl}
                alt={props.ProductData.name}
              />
              <div className={style.ProductInfo}>
                {!props.isItemList && (
                  <span className={style.ProductCategoryName}>
                    {props.ProductData.conCategory2.name}
                  </span>
                )}
                <span
                  className={style.ProductName}
                  style={{ marginTop: `${props.isItemList ? '14px' : '0px'}` }}
                >
                  {props.ProductData.name}
                </span>
                <div className={style.PriceContainer}>
                  <span className={style.DiscountRate}>
                    {props.ProductData.discountRate}%
                  </span>
                  <span className={style.SellingPrice}>
                    {props.ProductData.minSellingPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                  <span className={style.OriginalPrice}>
                    {props.ProductData.originalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                </div>
              </div>
            </div>
            </div>
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProductContent;
