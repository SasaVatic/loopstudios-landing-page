import { useRef, useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import useHeaderThemeObserver from "@/hooks/useHeaderThemeObserver";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeaderProps {
  data: {
    menuToggle: {
      label: string;
      iconOpenSrc: string;
      iconCloseSrc: string;
    };
    logo: {
      title: string;
      src: string;
      alt: string;
    };
    links: { label: string; href: string }[];
  };
}

export default function Header({
  data: { menuToggle, logo, links },
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useHeaderThemeObserver();
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.animate(
      [
        { opacity: 0, transform: "rotate(0deg)" },
        { opacity: 1, transform: "rotate(360deg)" },
      ],
      {
        duration: 500,
        fill: "forwards",
      }
    );
  };

  useGSAP(() => {
    gsap.timeline({ defaults: { duration: 0.5 } }).from('.nav-item', {
      x: 500,
      opacity: 0,
      ease: "power1",
      stagger: {
        each: 0.3
      }
    }).from(logoRef.current, {
      x: 500,
      opacity: 0,
      ease: "power1",
    })
  }, { scope: headerRef })

  return (
    <header
      ref={headerRef}
      className={clsx(
        styles.header,
        theme === "dark" && styles.dark,
        theme === "light" && styles.light,
        "container"
      )}
    >
      <a ref={logoRef} href="#" className={styles.logo}>
        <img
          src={logo.src}
          alt={logo.alt}
          className={styles.logoIcon}
          width={145}
          height={24}
        />
        <span className="sr-only">{logo.title}</span>
      </a>

      <nav aria-label="Primary navigation" id="primary-navigation">
        <button
          className={styles.menuToggleBtn}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          type="button"
          onClick={handleMenuToggle}
        >
          <img
            src={isMenuOpen ? menuToggle.iconCloseSrc : menuToggle.iconOpenSrc}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            onLoad={handleImageLoad}
          />
          <span className="sr-only">{menuToggle.label}</span>
        </button>
        <ul className={clsx(styles.menu, isMenuOpen && styles.open)}>
          {links.map((link) => (
            <li key={link.label} className="nav-item">
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
