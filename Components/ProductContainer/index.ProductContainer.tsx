import React from 'react';
import ProductContent from '../ProductContent/index.ProductContent';
import { ProductProps } from '../Types/ProductType';

const ProductContainer = ({ props }: ProductProps) => {
  return (
    <>
      {props.map((item, index) => (
        <li key={index}>
          <ProductContent props={item} />
        </li>
      ))}
    </>
  );
};
export default ProductContainer;
