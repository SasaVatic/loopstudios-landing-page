import clsx from "clsx";
import styles from "./Button.module.scss";
import type { Ref } from "react";

interface ButtonProps {
  buttonRef: Ref<HTMLButtonElement>;
  label: string;
  className?: string;
  handleClick: () => void;
}

export default function Button({ buttonRef, label, className, handleClick }: ButtonProps) {
  return (
    <button ref={buttonRef} className={clsx(styles.button, className)} onClick={handleClick}>
      {label}
    </button>
  );
}
