import clsx from "clsx";
import styles from "./Hero.module.scss";

interface HeaderProps {
  data: {
    title: string;
  };
}

export default function Hero({ data: { title } }: HeaderProps) {
  return (
    <section className={styles.hero} data-header-theme="light">
      <div className={clsx(styles.heroContainer, "container")}>
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
    </section>
  );
}
