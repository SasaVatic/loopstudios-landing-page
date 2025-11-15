import clsx from "clsx";
import styles from "./Card.module.scss";

interface CardProps {
  href: string;
  label: string;
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
}

export default function Card({ href, label, image }: CardProps) {
  return (
    <div className={clsx(styles.card, "card")}>
      <a href={href}>
        <span>{label}</span>
      </a>
      <picture>
        <source
          srcSet={image.desktop.src}
          media="(width >= 768px)"
          width={image.desktop.width}
          height={image.desktop.height}
        />
        <img
          src={image.mobile.src}
          alt={image.alt}
          width={image.mobile.width}
          height={image.mobile.height}
        />
      </picture>
    </div>
  );
}
