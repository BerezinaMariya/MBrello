import { FC } from "react";

import { Logo } from "@/shared/ui/Logo";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import headerImg from "./header-background.svg";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img
          className={styles.headerImg}
          src={headerImg}
          alt="Header background"
        />
      </header>
      <main className={styles.content}>
        <Logo className={styles.logo} />
        <section className={styles.section}>
          <h1 className={styles.headline}>Sign in</h1>
          <p className={styles.description}>Start your 30-day free trial.</p>
          <form className={styles.form} action="#">
            <div className={styles.label}>
              <span className={styles.span}>Email</span>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <Button className={styles.button} type="submit">
              Get started
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;
