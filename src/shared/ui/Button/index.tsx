import { FC, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  type?: "button" | "submit";
  variant?: "primary" | "gray" | "gray-50" | "white";
  size?: "xs" | "sm" | "md" | "xl" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export const Button: FC<Props> = ({
  className,
  type,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn(
        styles.root,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
