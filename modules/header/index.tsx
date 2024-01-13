import { useState } from "react";
import Link from "next/link";
import Logo from "@assets/illustrations/logo";
import { mainNavLinks } from "@common-data";
import { NavLinkContainer } from "@components";
import useHeader from "@hooks/use-header";
import {
  hamBtn,
  headerWrapper,
  logoContainer,
  logoWrapper,
  nav,
} from "./styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { ref } = useHeader();
  const hamClickHandler = () => setIsMenuOpen((prev) => !prev);
  const linkClickHandler = () => setIsMenuOpen(false);
  const linksMapper = (link: (typeof mainNavLinks)[0], index: number) => {
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
  };
  return (
    <header css={headerWrapper} ref={ref} id="header">
      <Link
        href="/"
        className={isMenuOpen ? "logo-wrapper active" : "logo-wrapper"}
        css={logoWrapper}
        title="Hymns of web | Home Page"
        aria-label="Hymns of web | Home Page"
        onClick={linkClickHandler}
      >
        <Logo css={logoContainer} />
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
