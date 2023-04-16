import { FC } from "react";
import cn from "classnames";

import logomark from "./logomark.svg";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  text?: string;
}

export const Logo: FC<Props> = ({ className, text }) => {
  return (
    <div className={cn(styles.root, className)}>
      <img className={styles.logomark} src={logomark} alt="MBrello logo" />
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
