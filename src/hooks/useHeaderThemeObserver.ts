import { useEffect, useState } from "react";

type HeaderTheme = "light" | "dark";

const useHeaderScrollTheme = (offset: number = 86): HeaderTheme => {
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]"
    );
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      let currentTheme: HeaderTheme = "light";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionTheme = section.getAttribute(
          "data-header-theme"
        ) as HeaderTheme;

        if (
          scrollY >= sectionTop - offset &&
          scrollY < sectionTop + sectionHeight - offset
        ) {
          currentTheme = sectionTheme;
        }
      });

      setTheme(currentTheme);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return theme;
};

export default useHeaderScrollTheme;
