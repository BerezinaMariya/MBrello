import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "email" | "text";
  name?: string;
  placeholder?: string;
  required?: boolean;
  text: string;
}
export const Input: FC<Props> = ({
  className,
  type,
  name,
  placeholder,
  required,
  text,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <span className={cn(styles.span, className)}>{text}</span>
      <input
        className={cn(styles.input, className)}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
