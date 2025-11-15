import clsx from "clsx";
import styles from "./About.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

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
  const aboutRef = useRef(null);
  const imgRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 30%",
        end: "50% 30%",
        scrub: true
      }
    })
    tl.from(imgRef.current, {
      x: -500,
      opacity: 0,
    }).from(descriptionRef.current, {
      x: 500,
      opacity: 0,
    }, "<")
  }, { scope: aboutRef })

  return (
    <section
      ref={aboutRef}
      className={clsx(styles.about, "container")}
      data-header-theme="dark"
    >
      <img
        ref={imgRef}
        src={image.mobile.src}
        srcSet={`${image.mobile.src} ${image.mobile.width}w, ${image.desktop.src} ${image.desktop.width}w`}
        sizes={`(width >= 768) ${image.desktop.width}w, ${image.mobile.width}w`}
        width={image.desktop.width}
        height={image.desktop.height}
        alt={image.alt}
      />
      <div ref={descriptionRef} className={styles.description}>
        <h2 className={styles.descriptionTitle}>{title}</h2>
        <p className={styles.descriptionText}>{text}</p>
      </div>
    </section>
  );
}
