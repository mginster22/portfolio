import React from "react";
import styles from "./../MyPortfolio/MyPortfolio.module.scss";

const Card = ({ src, href }) => {
  return (
    <article className={styles.card}>
      <img src={src} className={styles.card} alt={src} />
      <div className={styles.avatar}></div>
      <a className={styles.button_view} href={href}>
        View porject
      </a>
    </article>
  );
};

export default Card;
