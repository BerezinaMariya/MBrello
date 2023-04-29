import { FC } from "react";
import cn from "classnames";

import { Header } from "@/shared/ui/Header";
import { UserArea } from "@/shared/ui/Boards/UserArea";
import { Button } from "@/shared/ui/Button";
import { FeaturedIcon, PlusIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const BoardsPage: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Header />
      <main className={styles.content}>
        <UserArea />
        <div className={styles.boardsArea}>
          <FeaturedIcon className={styles.featuredIcon} />
          <h3 className={styles.newBoardHeadLine}>Start by creating a board</h3>
          <p className={styles.newBoardText}>
            Your boards will live here. Start creating by clicking on «New
            board»
          </p>
          <div className={styles.boardButtonsArea}>
            <Button
              className={styles.learnMoreButton}
              type="button"
              variant="gray"
            >
              Learn more
            </Button>
            <Button className={styles.newBoardButton} type="button">
              <PlusIcon className={styles.plusIcon} />
              New board
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoardsPage;
