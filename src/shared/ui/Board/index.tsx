import { FC, ReactNode } from "react";
import cn from "classnames";

import { BoardsBackgrounds } from "@/shared/ui/BoardsBackgrounds";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Board: FC<Props> = ({ className, children }) => {
  function randElement() {
    const randElement = Math.floor(Math.random() * BoardsBackgrounds.length);
    return BoardsBackgrounds[randElement];
  }

  return (
    <li
      className={cn(styles.root, className)}
      style={{ backgroundImage: `url(${randElement()})` }}
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
