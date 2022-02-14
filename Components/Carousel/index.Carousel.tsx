import style from "Components/Carousel/Carousel.module.css";
import { useState } from "react";

const ImageData = [
  {
    idx:1,
    imageUrl:"/images/carouselImage1.jpg",
  },
  {
    idx:2,
    imageUrl:"/images/carouselImage4.jpg",
  },
  {
    idx:3,
    imageUrl:"/images/carouselImage3.jpg",
  },
]

const Carousel = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={style.Container}>
      <div
        className={style.InnerContainer}
        style={{ transform: `translate(${step * 672 * -1}px)` }}
      >
        {
          ImageData.map((item)=>{
            return <img className={style.image} key={item.idx} src={item.imageUrl}/>
          })
        }
      </div>
      <div className={style.dots}>
        {
          ImageData.map((item,index)=>{
            return <span className={style.dot} style={{background : `${step === index ? "#000" : "#fff"}` }} onClick={()=>{setStep(index)}}></span>
          })
        }
        </div>
    </div>
  );
};

export default Carousel;
