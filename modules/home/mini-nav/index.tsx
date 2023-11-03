import { Ref, forwardRef } from "react";
import {
  miniNavButtonCss,
  miniNavContainerCss,
} from "@modules/home/mini-nav/styles";

function MN(_: unknown, ref: Ref<HTMLDivElement>) {
  const miniNavLinks = ["Home", "About", "Works", "Contact"];

  return (
    <div css={miniNavContainerCss} ref={ref}>
      {miniNavLinks.map((elem: string, index: number) => {
        return (
          <button
            type="button"
            key={index}
            css={miniNavButtonCss}
            aria-disabled
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}

const MiniNav = forwardRef(MN);
export default MiniNav;
