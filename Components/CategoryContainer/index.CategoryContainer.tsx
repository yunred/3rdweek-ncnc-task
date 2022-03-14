import style from 'Components/CategoryContainer/CategoryContainer.module.css';
import Category from 'Components/Category/index.Category';
import * as T from 'Types/Types';

interface CategoryContainerProps {
  CategoryData: T.CategoryListType[];
  currentPage: string;
}

const CategoryContainer = ({
  CategoryData,
  currentPage,
}: CategoryContainerProps) => {
  return (
    <div className={style.Container}>
      {CategoryData.map((item: T.CategoryListType, index: number) => {
        return (
          <div key={index} className={style.innerContainer}>
            <Category CategoryData={item} currentPage={currentPage} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryContainer;
