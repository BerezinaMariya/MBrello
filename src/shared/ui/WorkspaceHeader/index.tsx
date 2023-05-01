import { FC } from "react";
import cn from "classnames";

import { Button } from "@/shared/ui/Button";
import {
  AvatarRingIcon,
  SettingsIcon,
  InviteMembersIcon,
} from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

export const UserArea: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
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
        <Button className={styles.inviteMembersButton} type="button" size="sm">
          <InviteMembersIcon className={styles.buttonsIcon} />
          Invite members
        </Button>
      </div>
    </div>
  );
};
