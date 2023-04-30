import { FC, InputHTMLAttributes } from "react";

import cn from "classnames";

import { SearchInputIcon } from "@/shared/ui/Icons";

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
    <label className={styles.root}>
      <span className={styles.label}>{label}</span>
      <input
        className={cn(
          styles.input,
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
    <div className={styles.root}>
      <input
        className={cn(
          styles.input,
          styles[`variant-${variant}`],
          {
            [styles.hasError]: hasError,
          },
          type === "search" && styles.searchInput,
          className
        )}
        type={type}
        name={name}
        required={required}
        {...rest}
      />
      {type === "search" && (
        <SearchInputIcon className={styles.searchInputIcon} />
      )}
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </div>
  );
};
