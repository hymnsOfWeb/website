import { MouseEventHandler, useCallback } from "react";
import Link from "next/link";
import { mainTimeDelay } from "@/modules/header/styles";
import {
  navLinkContainerCss,
  navLinkDynamicCss,
  navLinkInactiveCss,
  charContainer,
  charDynamicDelayCss,
} from "./styles";

export interface NavLinkContainerProps {
  text: string;
  href: string;
  active: boolean;
  index: number;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}
export default function NavLinkContainer({
  text,
  href,
  active,
  index,
  onClick,
}: NavLinkContainerProps) {
  const delay = mainTimeDelay + 0.15 * index;
  const charMapper = useCallback((char: string, charIndex: number) => {
    const delay = charIndex * 0.075;
    return (
      <span key={"char" + charIndex} css={charContainer}>
        <span css={charDynamicDelayCss(delay)} className="char-child">
          {char}
        </span>
        <span css={charDynamicDelayCss(delay)} className="char-child">
          {char}
        </span>
      </span>
    );
  }, []);
  return (
    <Link
      href={href}
      className={active ? "active-link" : "inactive-link"}
      css={navLinkContainerCss}
      onClick={onClick}
      aria-label={text}
      title={text}
    >
      <span css={active ? navLinkDynamicCss(delay) : navLinkInactiveCss}>
        {text.split("").map(charMapper)}
      </span>
    </Link>
  );
}
