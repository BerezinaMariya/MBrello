import { FC } from "react";
import cn from "classnames";

import { Header } from "@/shared/ui/Header";
import { UserArea } from "@/shared/ui/BoardsUserArea";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { SearchFeaturedIcon, PlusIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const BoardsNotFoundPage: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Header />
      <main className={styles.content}>
        <UserArea />
        <div className={styles.searchArea}>
          <h3 className={styles.searchHeadLine}>Boards</h3>
          <Input
            className={styles.searchInput}
            type="search"
            name="searchInput"
            placeholder="Search"
          />
        </div>
        <div className={styles.boardsArea}>
          <SearchFeaturedIcon className={styles.searchFeaturedIcon} />
          <h3 className={styles.newBoardHeadLine}>No boards found</h3>
          <p className={styles.newBoardText}>
            Your search “Board name” did not match any boards. Please try again.
          </p>
          <div className={styles.boardButtonsArea}>
            <Button className={styles.clearButton} type="button" variant="gray">
              Clear search
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

export default BoardsNotFoundPage;
