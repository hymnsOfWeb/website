import {
  workHeadingCss,
  workMainHeadingCss,
  workMainSubHeadingCss,
} from "./style";

export default function WorkHeading() {
  return (
    <div css={workHeadingCss} className="home-child">
      <h2 css={workMainHeadingCss}>Works</h2>
      <span css={workMainSubHeadingCss}>
        Exclusively designed & developed by HOW
      </span>
    </div>
  );
}
