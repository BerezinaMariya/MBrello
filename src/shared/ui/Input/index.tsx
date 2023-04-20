import { FC, InputHTMLAttributes } from "react";

import cn from "classnames";

import styles from "./styles.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: "email" | "text" | "search";
  name: string;
  label?: string;
  hint?: string;
  required?: boolean;
  variant?: "sm" | "md";
  hasError?: false;
  error?: string;
}
export const Input: FC<Props> = ({
  className,
  type,
  name,
  label,
  hint,
  required,
  variant = "sm",
  hasError,
  error,
  ...rest
}) => {
  return label ? (
    <label className={className}>
      <span className={styles.label}>{label}</span>
      <input
        className={cn(
          styles.root,
          styles[`variant-${variant}`],
          {
            [styles.hasError]: hasError,
          },
          className
        )}
        type={type}
        name={name}
        required={required}
        {...rest}
      />
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </label>
  ) : (
    <>
      <input
        className={cn(
          styles.root,
          styles[`variant-${variant}`],
          {
            [styles.hasError]: hasError,
          },
          className
        )}
        type={type}
        name={name}
        required={required}
        {...rest}
      />
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </>
  );
};
