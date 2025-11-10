import clsx from "clsx";
import styles from "./About.module.scss";

interface AboutProps {
  data: {
    title: string;
    text: string;
    image: {
      mobile: {
        src: string;
        width: number;
        height: number;
      };
      desktop: {
        src: string;
        width: number;
        height: number;
      };
      alt: string;
    };
  };
}

export default function About({ data: { title, text, image } }: AboutProps) {
  return (
    <section
      className={clsx(styles.about, "container")}
      data-header-theme="dark"
    >
      <img
        src={image.mobile.src}
        srcSet={`${image.mobile.src} ${image.mobile.width}w, ${image.desktop.src} ${image.desktop.width}w`}
        sizes={`(width >= 768) ${image.desktop.width}w, ${image.mobile.width}w`}
        width={image.desktop.width}
        height={image.desktop.height}
        alt={image.alt}
      />
      <div className={styles.description}>
        <h2 className={styles.descriptionTitle}>{title}</h2>
        <p className={styles.descriptionText}>{text}</p>
      </div>
    </section>
  );
}
