import React from 'react';
import ProductContent from '../ProductContent/index.ProductContent';
import { ProductProps } from '../Types/ProductType';
import style from 'Components/ProductContainer/ProductContainer.module.css';

interface ProductContainerProps {
  ProductData: ProductProps[] | undefined;
  isItemList?: boolean;
}

const ProductContainer = ({
  ProductData,
  isItemList,
}: ProductContainerProps) => {
  return (
    <>
      <div className={style.PDwarpper}>
        {ProductData ? (
          <>
            {ProductData.map((item, index) => (
              <div className={style.innerContainer} key={index}>
                <ProductContent ProductData={item} isItemList={isItemList} />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
};
export default ProductContainer;
