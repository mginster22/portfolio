import React from "react";
import styles from "../Quiz.module.scss";
import { IoIosWine } from "react-icons/io";
const Result = ({ questions, correct }) => {
  console.log();
  return (
    <div className={styles.wrapper_quiz}>
      <div className={styles.result}>
        <IoIosWine size="4rem" />
        <h1>
          You guessed {correct} answers out of {questions.length}
        </h1>
        <button onClick={()=>document.location.reload()}>Play again</button>
      </div>
    </div>
  );
};

export default Result;
