import { useCallback, useState } from "react";
import Link from "next/link";
import { ImageComp } from "@/components";
import NavLinkContainer from "@/components/nav-link-container";
import { mainNavLinks } from "@common-data";
import {
  hamBtn,
  headerWrapper,
  logoContainer,
  logoWrapper,
  nav,
} from "./styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const hamClickHandler = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  const linkClickHandler = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const linksMapper = useCallback(
    (link: (typeof mainNavLinks)[0], index: number) => {
      return (
        <NavLinkContainer
          key={"main-nav-" + index}
          href={link?.href ?? "/"}
          text={link?.name ?? ""}
          active={isMenuOpen}
          index={index}
          onClick={linkClickHandler}
        />
      );
    },
    [isMenuOpen, linkClickHandler]
  );
  return (
    <header css={headerWrapper}>
      <Link
        href="/"
        className={isMenuOpen ? "logo-wrapper active" : "logo-wrapper"}
        css={logoWrapper}
        title="Hymns of web | Home Page"
        aria-label="Hymns of web | Home Page"
      >
        <ImageComp
          src="/assets/images/logo.png"
          alt="Hymns of web | Logo"
          containerCss={logoContainer}
        />
      </Link>
      <nav className={isMenuOpen ? "active" : undefined} css={nav}>
        {mainNavLinks.map(linksMapper)}
      </nav>
      <button
        className={"ham-btn" + (isMenuOpen ? " active" : "")}
        type="button"
        title={isMenuOpen ? "Close menu" : "Open menu"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={hamClickHandler}
        css={hamBtn}
      />
    </header>
  );
}
