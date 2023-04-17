import { FC } from "react";
import cn from "classnames";

import logomark from "./logomark.svg";
import logofilter from "./logofilter.svg";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  text?: string;
}

export const Logo: FC<Props> = ({ className, text }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.logo}>
        <img className={styles.logomark} src={logomark} alt="MBrello logo" />
        <img
          className={styles.logofilter}
          src={logofilter}
          alt="MBrello logo"
        />
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
