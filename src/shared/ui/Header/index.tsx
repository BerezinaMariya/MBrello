import { FC, useState } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";

import {
  BoardsIcon,
  MembersIcon,
  BellIcon,
  AvatarIcon,
} from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);
  return (
    <header className={cn(styles.root, className)}>
      <div className={styles.navMenuLeftSide}>
        <Logo className={styles.headerLogo} text={"MBrello"} />
        <Button
          className={cn(styles.button, styles.boardsButton)}
          type="button"
          variant="gray-50"
          size="xs"
        >
          <BoardsIcon className={styles.buttonIcon} />
          Boards
        </Button>
        <Button
          className={cn(styles.button, styles.membersButton)}
          type="button"
          variant="white"
          size="xs"
        >
          <MembersIcon className={styles.buttonIcon} />
          Members
        </Button>
      </div>
      <div className={styles.navMenuRightSide}>
        <Button
          className={styles.bellButton}
          type="button"
          variant="white"
          size="xs"
        >
          <BellIcon className={styles.bellIcon} />
        </Button>
        <AvatarIcon className={styles.avatarIcon} />
        <Button
          className={cn(styles.navMenuButton, styles.navMenuButtonOpen)}
          type="button"
          variant="white"
          size="xs"
          onClick={(e) => {
            e.currentTarget.classList.toggle(styles.navMenuButtonOpen);
            e.currentTarget.classList.toggle(styles.navMenuButtonClose);
            setNavigationMenuOpen(!isNavigationMenuOpen);
          }}
        ></Button>
      </div>
    </header>
  );
};
