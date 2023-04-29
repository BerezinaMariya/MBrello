import { FC, useState } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";

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
        <button
          className={cn(styles.button, styles.boardsButton)}
          type="button"
        >
          <BoardsIcon className={styles.buttonIcon} />
          Boards
        </button>
        <button
          className={cn(styles.button, styles.membersButton)}
          type="button"
        >
          <MembersIcon className={styles.buttonIcon} />
          Members
        </button>
      </div>
      <div className={styles.navMenuRightSide}>
        <button className={cn(styles.bellButton)} type="button">
          <BellIcon className={styles.bellIcon} />
        </button>
        <AvatarIcon className={styles.avatarIcon} />
        <button
          className={cn(styles.navMenuButton, styles.navMenuButtonOpen)}
          type="button"
          onClick={(e) => {
            e.currentTarget.classList.toggle(styles.navMenuButtonOpen);
            e.currentTarget.classList.toggle(styles.navMenuButtonClose);
            setNavigationMenuOpen(!isNavigationMenuOpen);
          }}
        ></button>
      </div>
    </header>
  );
};
