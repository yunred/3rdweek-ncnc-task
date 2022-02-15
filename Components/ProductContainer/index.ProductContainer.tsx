import React from 'react';
import ProductContent from '../ProductContent/index.ProductContent';
import { ProductProps } from '../Types/ProductType';
import { ProductContainerStyle } from 'Components/ProductContainer/style.ProductContainer.ts';

interface ProductContainerProps {
  ProductData: ProductProps[];
}

const ProductContainer = ({ ProductData }: ProductContainerProps) => {
  return (
    <>
      <div className='PDwarpper'>
      {ProductData.map((item, index) => (
        <div className="product_container" key={index}>
          <ProductContent ProductData={item} />
        </div>
      ))}
      </div>
      <style jsx>{ProductContainerStyle}</style>
    </>
  );
};
export default ProductContainer;
