import React from "react";
import whiteLogo from "../../assets/images/vk.png";
import blackLogo from "../../assets/images/vk-black.png";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import cx from "classnames";
import styles from "./Header.module.scss";

const data = ["About", "My skills", "Work", "Contact"];

const Header = ({ theme, switchTheme }) => {
  const switcher = cx(styles.slider, styles.round);
  const menuTheme = cx(styles.menu, {
    [styles.menu_light]: theme === "light",
    [styles.menu_black]: theme === "black",
  });
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={menuTheme}>
            <Link to="/">
              <img
                src={theme === "dark" ? blackLogo : whiteLogo}
                className={styles.logo}
                alt="theme"
              />
            </Link>

            <ul className={styles.list}>
              {data.map((link, index) => (
                <li key={index} className={styles.list_item}>
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.social}>
              {theme === "light" ? (
                <AiFillInstagram size="30px" />
              ) : (
                <AiOutlineInstagram size="30px" />
              )}
              <BsGithub size="26px" />
            </div>
          </div>
          <div className={styles.switcher}>
            <label className={styles.switch}>
              <input type="checkbox" onClick={switchTheme} />
              <span className={switcher}></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
