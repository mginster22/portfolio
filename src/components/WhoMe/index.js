import React from "react";
import cx from "classnames";
import ScrollDown from "../ScrollDown";
import styles from "./WhoMe.module.scss";
const WhoMe = ({ theme }) => {
  const whoMeEl = cx(styles.who_me, {
    [styles.who_me_light]: theme === "dark",
  });
  const scrollLeft = cx(styles.scrol_text_left, styles.text_pop_up_top);
  const scrollRight = cx(styles.scrol_text_right, styles.text_pop_up_top);
  return (
    <section className={whoMeEl}>
      <h1 className={styles.focus_in_contract}>
        Hi,
        <br />
        I&#8217;m Vlad,<span>frontend-developer</span>
      </h1>
      <ScrollDown className={scrollLeft} />
      <ScrollDown className={scrollRight} />
    </section>
  );
};

export default WhoMe;
