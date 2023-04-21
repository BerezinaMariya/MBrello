import { FC } from "react";
import cn from "classnames";

import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import { Button } from "@/shared/ui/Button";
import { MessageChatIcon, FacebookIcon, TwitterIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const WorkspacesNewPage: FC<Props> = ({ className }) => {
  return (
    <main className={cn(styles.root, className)}>
      <section className={styles.content}>
        <h1 className={styles.headLine}>Let's build a Workspace</h1>
        <p className={styles.description}>
          Boost your productivity by making it easier for everyone to access
          boards in one location.
        </p>
        <form className={styles.form} action="#">
          <Input
            className={styles.workspaceNameInput}
            name="WorkspaceName"
            placeholder="Your Company Co."
            required
            label="Workspace name"
            variant="md"
          />
          <Textarea
            className={styles.descriptionTextarea}
            placeholder="Our team organizes everything here."
            label="Description"
          />
          <Button className={styles.button} type="submit">
            Get started
          </Button>
        </form>
      </section>
      <section className={styles.contacts}>
        <h2 className={styles.subHeadLine}>Get in touch</h2>
        <p className={styles.supportingText}>
          We’d love to hear from you. Our friendly team is always here to chat.
        </p>
        <h3 className={styles.chatHeadLine}>
          <MessageChatIcon className={styles.messageChatIcon} />
          Chat to us
        </h3>
        <p className={styles.chatText}>Our friendly team is here to help.</p>
        <a
          className={styles.link}
          href="mailto:help@mbrello.com"
          rel="noreferrer"
        >
          help@mbrello.com
        </a>
        <nav className={styles.navIcons}>
          <FacebookIcon className={styles.icon} />
          <TwitterIcon className={styles.icon} />
        </nav>
      </section>
    </main>
  );
};

export default WorkspacesNewPage;
