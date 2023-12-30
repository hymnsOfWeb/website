import { subTextWrapper } from "@modules/home/landing/sub-text/styles";

export interface SubTextProps {
  className?: string;
}

export default function SubText(props: SubTextProps) {
  const { className } = props;
  const clickHandler = () => {
    const element = document.querySelector(
      "section[aria-labelledby='contact-heading']"
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={className} css={subTextWrapper}>
      <p className="text">Need a website?</p>
      <button className="cta" onClick={clickHandler}>
        Get Started
      </button>
    </div>
  );
}
