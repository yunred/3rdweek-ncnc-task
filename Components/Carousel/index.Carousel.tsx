import style from 'Components/Carousel/Carousel.module.css';
import { useState, useCallback, useRef, MouseEvent, TouchEvent } from 'react';
import useInterval from '../../Hooks/useInterval';

const ImageData = [
  {
    idx: 0,
    imageUrl: '/images/slideimage3.png',
  },
  {
    idx: 1,
    imageUrl: '/images/slideimg1.png',
  },
  {
    idx: 2,
    imageUrl: '/images/slideimage2.png',
  },
  {
    idx: 3,
    imageUrl: '/images/slideimage3.png',
  },
  {
    idx: 4,
    imageUrl: '/images/slideimg1.png',
  },
];

const Carousel = () => {
  const [step, setStep] = useState(1);
  const [startX, setStartX] = useState<number>();
  const [isSideImg, setIsSideImg] = useState<boolean>(false);
  const [isStop, setIsStop] = useState<boolean>(false);
  const [CarouselWidth, setCarouselWidth] = useState<number>(672);
  type MouseEventType = MouseEvent<HTMLElement>;
  type TouchEventType = TouchEvent<HTMLElement>;

  let endX;
  const onImgDragStart = (e: MouseEventType) => {
    e.preventDefault();
    setStartX(e.pageX);
  };
  const onImgDragEnd = (e: MouseEventType) => {
    e.preventDefault();
    endX = e.pageX;
    if (startX) {
      let diffX = endX - startX;
      if (diffX > 0 && Math.abs(diffX) > 100) {
        onLeftDrag();
        return;
      }
      if (diffX < 0 && Math.abs(diffX) > 100) {
        onRightDrag();
        return;
      }
    }
  };
  const handleTouchStart = (e: TouchEventType) => {
    e.stopPropagation();
    setStartX(e.changedTouches[0].pageX);
    setIsStop(true);
  };
  const handleTouchEnd = (e: TouchEventType) => {
    e.stopPropagation();
    setIsStop(false);
    endX = e.changedTouches[0].pageX;
    if (startX) {
      let diffX = endX - startX;
      if (diffX > 0 && Math.abs(diffX) > 100) {
        onLeftDrag();
        return;
      }
      if (diffX < 0 && Math.abs(diffX) > 100) {
        onRightDrag();
        return;
      }
    }
  };

  const onLeftDrag = () => {
    if (step === 1) {
      setTimeout(() => {
        setIsSideImg(true);
        setStep(ImageData.length - 2);
      }, 900);
      setIsSideImg(false);
      setStep(step => step - 1);
    } else {
      setIsSideImg(false);
      setStep(step => step - 1);
    }
  };
  const onRightDrag = () => {
    if (step === ImageData.length - 2) {
      setTimeout(() => {
        setIsSideImg(true);
        setStep(1);
      }, 900);
      setIsSideImg(false);
      setStep(step => step + 1);
    } else {
      setIsSideImg(false);
      setStep(step => step + 1);
    }
  };
  const onAutoSlideStop = () => {
    setIsStop(true);
  };
  const onAutoSlideStart = () => {
    setIsStop(false);
  };

  useInterval(
    () => {
      onRightDrag();
    },
    isStop ? null : 3000
  );

  const CarouselStyle = {
    transition: isSideImg ? '0ms' : 'transform 1s ease',
    transform: `translate(${step * CarouselWidth * -1}px)`,
  };

  const div = (node: any) => {
    if (node !== null) {
      setCarouselWidth(node.getBoundingClientRect().width);
    }
  };
  return (
    <div className={style.Container} ref={div}>
      <div
        className={style.InnerContainer}
        onMouseDown={onImgDragStart}
        onMouseUp={onImgDragEnd}
        onMouseOver={onAutoSlideStop}
        onMouseOut={onAutoSlideStart}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={CarouselStyle}
      >
        {ImageData.map((item, index) => {
          return (
            <img
              key={index}
              className={style.image}
              key={item.idx}
              src={item.imageUrl}
            />
          );
        })}
      </div>
      <div className={style.dots}>
        {ImageData.map((item, index) => {
          if (index > 0 && index < ImageData.length - 1) {
            return (
              <span
                key={index}
                className={style.dot}
                style={{
                  background: `${
                    step === index ||
                    (step === 0 && index === ImageData.length - 2) ||
                    (step === ImageData.length - 1 && index === 1)
                      ? '#000'
                      : '#fff'
                  }`,
                }}
                onClick={() => {
                  setStep(index);
                }}
              ></span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
