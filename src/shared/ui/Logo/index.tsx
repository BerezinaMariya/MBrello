import { FC } from "react";
import cn from "classnames";

import { ReactComponent as Logomark } from "./logomark.svg";
import { ReactComponent as Logofilter } from "./logofilter.svg";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  text?: string;
}

export const Logo: FC<Props> = ({ className, text }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.logo}>
        <Logomark className={styles.logomark} />
        <Logofilter className={styles.logofilter} />
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
