import styles from "./Footer.module.scss";
import clsx from "clsx";

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
  return (
    <footer className={styles.footer}>
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
              <li key={`${link.label}-${link.href}`}>
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
                <li key={link.label}>
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
    </footer>
  );
}

//     <div className="attribution">
//     Challenge by{" "}
//     <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
//       Frontend Mentor
//     </a>
//     . Coded by <a href="#">Your Name Here</a>.
//   </div>
