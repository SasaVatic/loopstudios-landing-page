import clsx from "clsx";
import styles from "./Creations.module.scss";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

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
  const creationsRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRefMob = useRef(null);
  const buttonRefTab = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: creationsRef.current,
        start: "top 50%",
        end: "100% 50%",
        toggleActions: "play pause resume reverse"
      }
    })
    tl.from(titleRef.current, {
      x: -500,
      opacity: 0,
      duration: 0.5,
    }).from([buttonRefMob.current, buttonRefTab.current], {
      x: 500,
      opacity: 0,
      duration: 0.5,
    }).from(".card", {
      y: -500,
      opacity: 0,
      duration: 0.5,
      stagger: {
        each: 0.3
      }
    })
  }, { scope: creationsRef })

  return (
    <section
      ref={creationsRef}
      className={clsx(styles.creations, "container")}
      data-header-theme="dark"
    >
      <div className={styles.titleBox}>
        <h2 ref={titleRef} className={styles.title}>{title}</h2>
        <Button
          buttonRef={buttonRefMob}
          className={styles.buttonTablet}
          label={button.label}
          handleClick={() => { }}
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
        buttonRef={buttonRefTab}
        className={styles.buttonMobile}
        label={button.label}
        handleClick={() => { }}
      />
    </section>
  );
}
