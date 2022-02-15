import style from "Components/Question/Question.module.css";
import { useState } from "react";
import * as T from "Types/Types";

interface QuestionProps {
  QuestionsData:T.QuestionContainerProps;
}

const setDefaultHeight = { height: `52.39px` };
const setHeight = { height: `unset` };
const setOpen = { display: `block` };
const setClose = { display: `none` };

const Question = ({ QuestionsData }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={isOpen ? setHeight : setDefaultHeight}
      className={style.innerContainer}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className={style.header}>
        <h3>
          <span className={style.q}>Q</span>
          {QuestionsData.question}
        </h3>
        <button
          className={style.seeMoreBtn}
        >
          <img
            className={style.seeMoreImg}
            alt="seeMore"
            src="images/arrowback.png"
          />
        </button>
      </div>
      <div style={isOpen ? setOpen : setClose} className={style.body}>
        <p className={style.bodyContent}>{QuestionsData.answer}</p>
      </div>
    </div>
  );
};

export default Question;
