import clsx from "clsx";
import styles from "./Hero.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface HeaderProps {
  data: {
    title: string;
  };
}

export default function Hero({ data: { title } }: HeaderProps) {
  const heroRef = useRef(null);
  const heroContainer = useRef(null);

  useGSAP(() => {
    gsap.from(heroContainer.current, {
      y: 500,
      duration: 0.5,
      opacity: 0,
      delay: 2.2,
      ease: "power1"
    })
  }, { scope: heroRef })

  return (
    <section className={styles.hero} data-header-theme="light" ref={heroRef}>
      <div className={clsx(styles.heroContainer, "container")} ref={heroContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
    </section>
  );
}
