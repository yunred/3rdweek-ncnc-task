import React from 'react';
import ProductContent from '../ProductContent/index.ProductContent';
import { ProductProps } from '../Types/ProductType';
import { ProductContentStyle } from '../ProductContent/style.ProductContent';

interface ProductContainerProps {
  ProductData: ProductProps[];
}

const ProductContainer = ({ ProductData }: ProductContainerProps) => {
  return (
    <>
      {ProductData.map((item, index) => (
        <div className="product_container" key={index}>
          <ProductContent ProductData={item} />
        </div>
      ))}
      <style jsx>{ProductContentStyle}</style>
    </>
  );
};
export default ProductContainer;
