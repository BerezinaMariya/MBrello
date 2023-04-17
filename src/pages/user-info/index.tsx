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
    <div className={cn(styles.root, className)}>
      <section className={styles.content}>
        <h1 className={styles.headline}>Please, introduce yourself</h1>
        <p className={styles.description}>
          You can do this later on Profile page.
        </p>
        <a className={styles.link} href="index.html">
          Skip
        </a>
        <form className={styles.form} action="#">
          <Input
            className={styles.fninput}
            type="text"
            name="firstName"
            placeholder="First name"
            required
            text="First name"
          />
          <Input
            className={styles.lninput}
            type="text"
            name="lastName"
            placeholder="Last name"
            text="Last name"
          />
          <Button className={styles.button} type="submit">
            Continue
          </Button>
        </form>
      </section>
    </div>
  );
};

export default UserInfoPage;
