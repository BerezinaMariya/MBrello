import { FC, ReactNode } from "react";
import cn from "classnames";

import { randomBackgroundImage } from "@/entities/board/lib/randomBackgroundImage";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Board: FC<Props> = ({ className, children }) => {
  return (
    <li
      className={cn(styles.root, className)}
      style={{ backgroundImage: `url(${randomBackgroundImage()})` }}
    >
      <a className={styles.boardLink} href="/">
        <span className={styles.boardSpan}>
          Sprint #3 (03.04.2023 - 10.04.2023)
        </span>
      </a>
      {children}
    </li>
  );
};
