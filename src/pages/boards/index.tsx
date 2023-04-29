import { FC } from "react";
import cn from "classnames";

import { Header } from "@/shared/ui/Header";
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
  return (
    <div className={cn(styles.root, className)}>
      <Header />
      <main className={styles.content}>
        <div className={styles.userArea}>
          <div className={styles.infoArea}>
            <AvatarRingIcon className={styles.userAvatarRingIcon}>
              <p className={styles.userInitials}>BM</p>
            </AvatarRingIcon>
            <p className={styles.userName}>
              Berezina Mariya Alexeevna
              <p className={styles.userAccountStatus}>Private</p>
            </p>
          </div>
          <div className={styles.buttonsArea}>
            <Button
              className={styles.settingsButton}
              type="button"
              variant="gray"
              size="sm"
            >
              <SettingsIcon className={styles.buttonsIcon} />
              Settings
            </Button>
            <Button
              className={styles.inviteMembersButton}
              type="button"
              size="sm"
            >
              <InviteMembersIcon className={styles.buttonsIcon} />
              Invite members
            </Button>
          </div>
        </div>
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
