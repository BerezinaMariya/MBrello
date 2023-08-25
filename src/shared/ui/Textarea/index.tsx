import { ChangeEvent, TextareaHTMLAttributes } from "react";

import cn from "classnames";

import styles from "./styles.module.css";

interface Props<T extends string>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  onValue: ({ value, name }: { value: string; name: T }) => void;
  name: T;
  value: string;
  label?: string;
  hint?: string;
  hasError?: boolean;
  error?: string;
}

export const Textarea = <T extends string>({
  className,
  onValue,
  name,
  value,
  label,
  hint,
  hasError,
  error,
  ...rest
}: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.currentTarget;
    onValue({ value, name: name as T });
  };

  return label ? (
    <label className={className}>
      <span className={styles.label}>{label}</span>
      <textarea
        className={cn(styles.root, { [styles.hasError]: hasError })}
        onChange={handleChange}
        name={name}
        value={value}
        {...rest}
      >
        {value}
      </textarea>
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </label>
  ) : (
    <>
      <textarea
        className={cn(styles.root, { [styles.hasError]: hasError })}
        onChange={handleChange}
        name={name}
        value={value}
        {...rest}
      >
        {value}
      </textarea>
      {hasError ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </>
  );
};
