import { FC, useState } from "react";
import cn from "classnames";

import { Logo } from "@/shared/ui/Logo";
import { Button } from "@/shared/ui/Button";
import {
  AvatarRingIcon,
  SettingsIcon,
  InviteMembersIcon,
  FeaturedIcon,
  PlusIcon,
} from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const BoardsPage: FC<Props> = ({ className }) => {
  const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}>
        <Logo className={styles.headerLogo} text={"MBrello"} />
        <button
          className={cn(styles.navMenuButton, styles.navMenuButtonOpen)}
          type="button"
          onClick={(e) => {
            e.currentTarget.classList.toggle(styles.navMenuButtonOpen);
            e.currentTarget.classList.toggle(styles.navMenuButtonClose);
            setNavigationMenuOpen(!isNavigationMenuOpen);
            console.log(e.currentTarget.classList);
          }}
        ></button>
      </header>
      <main className={styles.content}>
        <div className={styles.userArea}>
          <AvatarRingIcon className={styles.userAvatarRingIcon}>
            <p className={styles.userInitials}>BM</p>
          </AvatarRingIcon>
          <div className={styles.infoArea}>
            <p className={styles.userName}>Berezina Mariya Alexeevna</p>
            <p className={styles.userAccountStatus}>Private</p>
          </div>
        </div>
        <div className={styles.buttonArea}>
          <Button
            className={styles.settingsButton}
            type="button"
            variant="gray"
            size="sm"
          >
            <SettingsIcon className={styles.settingsIcon} />
            Settings
          </Button>
          <Button
            className={styles.inviteMembersButton}
            type="button"
            size="sm"
          >
            <InviteMembersIcon className={styles.inviteMembersIcon} />
            Invite members
          </Button>
        </div>
        <FeaturedIcon className={styles.featuredIcon} />
        <h3 className={styles.newBoardHeadLine}>Start by creating a board</h3>
        <p className={styles.newBoardText}>
          Your boards will live here. Start creating by clicking on «New board»
        </p>
        <Button className={styles.newBoardButton} type="button">
          <PlusIcon className={styles.plusIcon} />
          New board
        </Button>
      </main>
    </div>
  );
};

export default BoardsPage;
