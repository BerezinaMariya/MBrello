import { FC, TextareaHTMLAttributes } from "react";

import cn from "classnames";

import styles from "./styles.module.css";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
}

export const Textarea: FC<Props> = ({ className, label, ...rest }) => {
  return label ? (
    <label>
      <span className={styles.label}>{label}</span>
      <textarea className={cn(styles.root, className)} {...rest} />
    </label>
  ) : (
    <>
      <textarea className={cn(styles.root, className)} {...rest} />
    </>
  );
};
