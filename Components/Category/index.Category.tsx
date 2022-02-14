// import * as S from 'Components/Category/style.Category';
import style from "./Category.module.css";
import css from "styled-jsx/css";
import Link from "next/link";

const data = {
  id: 1,
  name: "땡철이",
  discountRate: 31,
  imageUrl:
    "https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg",
};

interface CategoryPropsType{
  id: number;
  name : string;
  imageUrl: string;
  linkUrl: string;
}

const Category = (CategoryData:CategoryPropsType): JSX.Element => {
  return (
    <>
      <div className={style.Container} key={CategoryData.id}>
        {/* <Link href={CategoryData.linkUrl}> */}
        <Link href="#">
          <a className={style.link}>
            <div className={style.CategoryContent}>
              {/* <img className={style.CategoryImage} src={CategoryData.imageUrl} /> */}
              <img className={style.CategoryImage} src={data.imageUrl} />
              {/* <p className={style.CategoryName}>{CategoryData.name}</p> */}
              <p className={style.CategoryName}>{data.name}</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Category;
