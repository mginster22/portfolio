import React from "react";
import cx from "classnames";
import Card from "../Card/Index";
import greensit from "../../assets/images/greensite.png";
import bike from "../../assets/images/bike.png";
import squad from "../../assets/images/squad.png";
import { FaArrowUp } from "react-icons/fa";
import styles from "./MyPortfolio.module.scss";

const MyPortfolio = ({ theme }) => {
  const data = [
    "https://github.com/mginster22/GreenSite",
    "https://github.com/mginster22/LandingBike",
    "https://github.com/mginster22/pagesqdlhepl",
  ];
  const portfolioTheme = cx(styles.portfolio, {
    [styles.portfolio_dark]: theme === "dark",
  });
  return (
    <section className={portfolioTheme}>
      <h2 className={styles.title}>My Portfolio</h2>
      <p>
        A small gallery of my projects that I made up. I made them in the
        learning phase
      </p>
      <div className={styles.list}>
        <Card src={greensit} href={data[0]} />
        <Card src={bike} href={data[1]} />
        <Card src={squad} href={data[2]} />
      </div>
     
      <a className={styles.scroll_arrow_up} href="#home">
        <FaArrowUp size="20px" />
      </a>
    </section>
  );
};

export default MyPortfolio;
