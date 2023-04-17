import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "email" | "text";
  name?: string;
  placeholder?: string;
  required?: boolean;
}
export const Input: FC<Props> = ({
  className,
  type,
  name,
  placeholder,
  required,
}) => {
  return (
    <input
      className={cn(styles.root, className)}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};
