import { FC } from "react";
import cn from "classnames";

import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Envelope } from "@/shared/ui/Icons";

import styles from "./styles.module.css";
import logomark from "./logomark.svg";
import logofilter from "./logofilter.svg";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}></header>
      <main className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.logomark} src={logomark} alt="MBrello logo" />
          <img
            className={styles.logofilter}
            src={logofilter}
            alt="MBrello logo"
          />
          <span className={styles.text}>MBrello</span>
        </div>
        <section className={styles.section}>
          <h1 className={styles.headline}>Sign in</h1>
          <p className={styles.description}>Start your 30-day free trial.</p>
          <form className={styles.form} action="#">
            <Input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              label="Email"
              variant="md"
            />
            <Button className={styles.button} type="submit">
              Get started
            </Button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; MBrello 2023</p>
        <a
          className={styles.link}
          href="mailto:help@mbrello.com"
          rel="noreferrer"
        >
          <Envelope className={styles.envelope} /> help@mbrello.com
        </a>
      </footer>
    </div>
  );
};

export default SignInPage;
