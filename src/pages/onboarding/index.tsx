import { FC } from "react";
import cn from "classnames";

import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const UserInfoPage: FC<Props> = ({ className }) => {
  return (
    <main className={cn(styles.root, className)}>
      <h1 className={styles.headLine}>Please, introduce yourself</h1>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          You can do this later on Profile page.
        </p>
        <a className={styles.skipLink} href="/">
          Skip
        </a>
      </div>
      <form className={styles.form} action="#">
        <Input
          className={styles.firstNameInput}
          type="text"
          name="FirstName"
          placeholder="First name"
          required
          label="First name"
          variant="md"
        />
        <Input
          className={styles.lastNameInput}
          type="text"
          name="LastName"
          placeholder="Last name"
          label="Last name"
          variant="md"
        />
        <Button className={styles.button} type="submit">
          Continue
        </Button>
      </form>
    </main>
  );
};

export default UserInfoPage;
