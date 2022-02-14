import style from "Components/CategoryContainer/CategoryContainer.module.css";
// import Category from 'Components/Category/index.Category';
import Category from "../Category/index.Category";
import * as C from '/Const/Const';
import * as H from '/Hooks/index.ts';
import { useState, useEffect } from 'react';

interface CategoryProps {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

const CategoryContainer = ({CategoryData} :{CategoryData:CategoryProps}) => {
  return (
    <div className={style.Container}>
      {CategoryData.map((item: CategoryProps,index :number) => {
        return (
          <div key={index} className={style.innerContainer}>
            <Category CategoryData={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryContainer;
