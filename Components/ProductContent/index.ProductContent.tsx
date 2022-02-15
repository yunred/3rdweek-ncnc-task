import React from 'react';
import Image from 'next/image';
import { ProductContentStyle } from './style.ProductContent';
import { ProductProps } from '../Types/ProductType';
import Link from 'next/link';

const ProductContent = ({ ProductData }: ProductProductData) => {
  //select === soon :<Link href={`/items/${ProductData.id}`}>
  //select === brands : <Link href={`/items/${ProductData.id}`}>
  //select === items : Link 없음
  return (
    <>
      {ProductData && (
        <Link href={`/items/${ProductData.id}`}>
          <div className="container">
            <img
              className="product_img"
              src={ProductData.imageUrl}
              alt={ProductData.name}
            />
            <div className="product_info_container">
              <span className="product_category_name">
                {ProductData.conCategory2.name}
              </span>
              <span className="product_name">{ProductData.name}</span>
              <div className="price_container">
                <span className="discount_rate">
                  {ProductData.discountRate}%
                </span>
                <span className="selling_price">
                  {ProductData.minSellingPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </span>
                <span className="original_price">
                  {ProductData.originalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
      <style jsx>{ProductContentStyle}</style>
    </>
  );
};

export default ProductContent;
