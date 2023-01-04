import styles from "./alert.module.css";
import { clsx as cx } from "clsx";

export default function Alert({ children, type }) {
  return (
    <div
      className={cx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
