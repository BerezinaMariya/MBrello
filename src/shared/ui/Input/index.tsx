import cn from "classnames";

import { SearchInputIcon } from "@/shared/ui/Icons";

import styles from "./styles.module.css";

import type { ChangeEvent, InputHTMLAttributes } from "react";

export interface Props<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onValue: ({ value, name }: { value: string; name: T }) => void;
  value: string;
  name: T;
  label?: string;
  type?: "email" | "text" | "search";
  hint?: string;
  required?: boolean;
  variant?: "sm" | "md";
  hasError?: boolean;
  error?: string;
}

export const Input = <T extends string>({
  className,
  onValue,
  value,
  name,
  label,
  type,
  hint,
  required,
  variant = "sm",
  hasError,
  error,
  ...rest
}: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    onValue({ value, name: name as T });
  };

  return label ? (
    <label className={styles.root}>
      <span className={styles.label}>{label}</span>
      <input
        className={cn(
          styles.input,
          styles[`variant-${variant}`],
          {
            [styles.hasError]: hasError,
            [styles.searchInput]: type === "search",
          },
          className
        )}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
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
            [styles.searchInput]: type === "search",
          },
          className
        )}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
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
