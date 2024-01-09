import { Ref, forwardRef } from "react";
import { valensiteNav } from "@common-data";
import {
  valNavDotStyle,
  valNavLinkStyle,
  valensiteNavContainer,
} from "@modules/valensite/valensite-nav/style";

function VN(_: unknown, ref: Ref<HTMLDivElement>) {
  const mapper = (elem: (typeof valensiteNav)[0], index: number) => {
    const idName = elem.link.substring(
      elem.link.indexOf("#") + 1,
      elem.link.length
    );
    return (
      <a
        key={index}
        css={valNavLinkStyle}
        href={elem.link}
        className={`val-nav-items ${idName}`}
      >
        {elem.text}
        <span css={valNavDotStyle}></span>
      </a>
    );
  };
  return (
    <div css={valensiteNavContainer} ref={ref}>
      {valensiteNav.map(mapper)}
    </div>
  );
}

const ValensiteNav = forwardRef(VN);
export default ValensiteNav;
