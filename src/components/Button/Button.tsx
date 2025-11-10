import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  className?: string;
  handleClick: () => void;
}

export default function Button({ label, className, handleClick }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} onClick={handleClick}>
      {label}
    </button>
  );
}
