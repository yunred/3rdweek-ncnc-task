import style from "Components/Category/Category.module.css";
import Link from "next/link";
import { CategoryListType } from 'Types/Types';

interface CategoryProps {
  CategoryData : CategoryListType;
  currentPage: string;
}

const Category = ({CategoryData,currentPage}: CategoryProps): JSX.Element => {

  return (
    <>
      {CategoryData && (
        <div className={style.Container} key={CategoryData.id}>
          <Link href={currentPage === 'home' ? `/categories/${CategoryData.id}` : `/brands/${CategoryData.id}`}>
            <a className={style.link}>
              <div className={style.CategoryContent}>
                <img
                  className={style.CategoryImage}
                  src={CategoryData.imageUrl}
                  alt={CategoryData.name}
                />
                <div className={style.CategoryName}>{CategoryData.name}</div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Category;
