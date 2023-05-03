import { FC } from "react";
import cn from "classnames";

import { Header } from "@/shared/ui/Header";
import { Board } from "@/entities/board/ui/Board";
import { WorkspaceHeader } from "@/shared/ui/WorkspaceHeader";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { PlusCircleIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const BoardsPage: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Header />
      <main className={styles.content}>
        <WorkspaceHeader />
        <div className={styles.searchArea}>
          <h3 className={styles.searchHeadLine}>Boards</h3>
          <Input
            className={styles.searchInput}
            type="search"
            name="searchInput"
            placeholder="Search"
          />
        </div>
        <ul className={styles.boardsArea}>
          <li className={styles.newBoardItem}>
            <Button
              className={styles.newBoardButton}
              type="button"
              size="lg"
              variant="white"
            >
              <PlusCircleIcon className={styles.plusCircleIcon} />
              Create new board
            </Button>
          </li>
          <Board />
          <Board />
          <Board />
          <Board />
        </ul>
      </main>
    </div>
  );
};

export default BoardsPage;
