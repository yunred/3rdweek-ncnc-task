import React from 'react';
import Image from 'next/image';
import style from 'Components/ProductContent/ProductContent.module.css';
import { ProductProps } from '../Types/ProductType';
import Link from 'next/link';
interface ProductContentProps {
  ProductData: ProductProps;
  isItemList?: boolean;
}

const ProductContent = ({ ProductData, isItemList }: ProductContentProps) => {
  return (
    <>
      <div className={style.ContentWarpper}>
        {ProductData && (
          <Link href={`/items/${ProductData.id}`}>
            <a>
            <div className="container">
            <div className={style.Container}>
              <img
                className={style.ProductImg}
                src={ProductData.imageUrl}
                alt={ProductData.name}
              />
              <div className={style.ProductInfo}>
                {!isItemList && (
                  <span className={style.ProductCategoryName}>
                    {ProductData.conCategory2.name}
                  </span>
                )}
                <span
                  className={style.ProductName}
                  style={{ marginTop: `${isItemList ? '14px' : '0px'}` }}
                >
                  {ProductData.name}
                </span>
                <div className={style.PriceContainer}>
                  <span className={style.DiscountRate}>
                    {ProductData.discountRate}%
                  </span>
                  <span className={style.SellingPrice}>
                    {ProductData.minSellingPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                  <span className={style.OriginalPrice}>
                    {ProductData.originalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
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
