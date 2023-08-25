import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import { FC } from "react";
import cn from "classnames";

import { ROUTER_LINK } from "@/shared/config";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { GoogleIcon, EnvelopeIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";
import { useModel } from "./model";

import logomark from "./logomark.svg";
import logofilter from "./logofilter.svg";

interface Props {
  className?: string;
}

const SignInPage: FC<Props> = ({ className }) => {
  const model = useModel();

  if (model.isAuthenticated) {
    return <Navigate to={ROUTER_LINK.MAIN} state={model.state} replace />;
  }

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
          <form className={styles.form} onSubmit={model.handleLogin}>
            <Input
              className={styles.input}
              type="email"
              name="email"
              value={model.email}
              placeholder="Enter your email"
              required
              label="Email"
              variant="md"
              onValue={model.handleEmailChange}
            />
            <Button
              className={styles.signUpButton}
              type="submit"
              disabled={model.isLoading}
            >
              {model.isLoading ? "Loading" : "Get started"}
            </Button>
            <Button
              className={styles.signUpWithGoogleButton}
              variant="gray"
              type="submit"
            >
              <GoogleIcon className={styles.googleIcon} />
              Sign up with Google
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
          <EnvelopeIcon className={styles.envelopeIcon} />
          help@mbrello.com
        </a>
      </footer>
    </div>
  );
};

export default observer(SignInPage);
