import clsx from "clsx";
import styles from "./Creations.module.scss";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

interface CreationsProps {
  data: {
    title: string;
    button: {
      label: string;
    };
    cards: {
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
    }[];
  };
}

export default function Creations({
  data: { title, button, cards },
}: CreationsProps) {
  return (
    <section
      className={clsx(styles.creations, "container")}
      data-header-theme="dark"
    >
      <div className={styles.titleBox}>
        <h2 className={styles.title}>{title}</h2>
        <Button
          className={styles.buttonTablet}
          label={button.label}
          handleClick={() => {}}
        />
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card
            key={`${card.label}-${card.href}`}
            label={card.label}
            href={card.href}
            image={card.image}
          />
        ))}
      </div>
      <Button
        className={styles.buttonMobile}
        label={button.label}
        handleClick={() => {}}
      />
    </section>
  );
}
