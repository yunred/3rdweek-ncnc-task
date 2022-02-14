import css from 'styled-jsx/css';
export const ProductContentStyle = css`
  * {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: row;
    height: 107px;
    width: 375px;
    padding: 17px 0 17px 17px;
    border-bottom: solid 1px #f1f3f4;
    background-color: #ffffff;
  }
  .product_img {
    width: 74px;
    height: 74px;
    border-radius: 5px;
  }
  .product_info_container {
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    margin-top: 3px;
  }
  .product_category_name {
    font-size: 14px;
    line-height: 14px;
    color: #808080;
    margin-bottom: 7px;
  }
  .product_name {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 13px;
  }
  .price_container {
    display: flex;
    margin-left: 1px;
  }
  .discount_rate {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ff5757;
    margin-right: 9px;
  }
  .selling_price {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-right: 6px;
  }
  .original_price {
    font-size: 14px;
    line-height: 19px;
    margin-top: 1px;
    color: #808080;
    text-decoration: line-through;
  }
`;
