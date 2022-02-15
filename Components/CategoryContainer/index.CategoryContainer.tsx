import style from "Components/CategoryContainer/CategoryContainer.module.css";
import Category from "Components/Category/index.Category";

interface CategoryProps {
  map(arg0: (item: CategoryProps, index: number) => JSX.Element): import("react").ReactNode;
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
