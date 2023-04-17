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
          <div className={styles.label}>
            <span className={styles.span}>First name</span>
            <Input
              className={styles.input}
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className={styles.label}>
            <span className={styles.span}>Last name</span>
            <Input
              className={styles.input}
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <Button className={styles.button} type="submit">
            Continue
          </Button>
        </form>
      </section>
    </div>
  );
};

export default UserInfoPage;
