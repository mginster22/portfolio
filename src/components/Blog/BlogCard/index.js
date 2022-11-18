import React from "react";
import cx from "classnames";
import styles from "../Blog.module.scss";

const BlogCard = ({ reply, setReply, answer, question ,theme}) => {
  const textAnswer = cx(styles.text_answer, {
    [styles.text_answer_active]: reply===question,
  });
  const blogCard=cx(styles.blog_card,{
    [styles.blog_card_dark]:theme==='dark'
  })
  return (
    <article className={blogCard} onClick={() => setReply(question)}>
      <h2 >{question}</h2>
      {reply && <p className={textAnswer}>{answer}</p>}
    </article>
  );
};

export default BlogCard;
