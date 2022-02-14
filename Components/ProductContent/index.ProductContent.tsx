import React from 'react';
import Image from 'next/image';
import { ProductContentStyle } from './style.ProductContent';
import { ProductProps } from '../Types/ProductType';

const ProductContent = ({ props }: ProductProps) => {
  return (
    <>
      <div className="container">
        <img className="product_img" src={props.imageUrl} alt={props.name} />
        <div className="product_info_container">
          <span className="product_category_name">
            {props.conCategory2.name}
          </span>
          <span span className="product_name">
            {props.name}
          </span>
          <div className="price_container">
            <span className="discount_rate">{props.discountRate}%</span>
            <span className="selling_price">
              {props.minSellingPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
            <span className="original_price">
              {props.originalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
          </div>
        </div>
      </div>
      <style jsx>{ProductContentStyle}</style>
    </>
  );
};

export default ProductContent;
