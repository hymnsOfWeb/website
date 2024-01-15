import Link from "next/link";
import { subTextWrapper } from "@modules/home/landing/sub-text/styles";

export interface SubTextProps {
  className?: string;
}

export default function SubText(props: SubTextProps) {
  const { className } = props;
  return (
    <div className={className} css={subTextWrapper}>
      <p className="text">Need a website?</p>
      <Link href="/contact" className="cta">
        Get Started
      </Link>
    </div>
  );
}
