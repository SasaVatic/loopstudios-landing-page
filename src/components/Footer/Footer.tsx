import styles from "./Footer.module.scss";
import clsx from "clsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FooterProps {
  data: {
    logo: {
      src: string;
      alt: string;
    };
    links: { label: string; href: string }[];
    socialLinks: {
      label: string;
      href: string;
      icon: {
        src: string;
        alt: string;
      };
    }[];
    copyright: string;
  };
}

export default function Footer({
  data: { logo, links, socialLinks, copyright },
}: FooterProps) {
  const footerRef = useRef(null);
  const attributionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 90%",
        toggleActions: "play pause resume reverse",
      }
    })
    tl.from(footerRef.current, {
      x: 1000,
      opacity: 0,
      duration: 0.5,
    }).from(attributionRef.current, {
      y: -500,
      opacity: 0,
      duration: 0.5,
    })
  }, { scope: footerRef })
  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={clsx(styles.footerContainer, "container")}>
        <nav aria-label="Footer main links">
          <img
            className={styles.logo}
            src={logo.src}
            alt={logo.alt}
            width={143}
            height={24}
          />
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`} className="nav-item">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <nav aria-label="Footer social links">
            <ul className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <li key={link.label} className="nav-item">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{link.label}</span>
                    <img
                      src={link.icon.src}
                      alt={link.icon.alt}
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </div>
      <div ref={attributionRef} className={styles.attribution}>
        Challenge by{" "}
        <span className={styles.linkBox}>
          <a href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw" target="_blank">
            Frontend Mentor
          </a>
        </span>
        . Coded by <span className={styles.linkBox}><a href="https://sasavatic.netlify.app/" target="_blank">Saša Vatić</a></span>.
      </div>
    </footer>
  );
}

