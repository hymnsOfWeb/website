import {
  bubbleLinkCss,
  bubbleSvgCss,
  bubbleText,
  bubbleWrapperCss,
  bubbleWrapperPosition,
  bubbleWrapperScale,
} from "@components/contact-bubble/styles";
import { BubbleDataProps } from "@components/contact-bubble/types";

export default function ContactBubble({
  href,
  title,
  className = "",
  styles: { top, left, scale },
  icon,
  text,
}: BubbleDataProps) {
  const Icon = icon;
  return (
    <div
      className={`bubble-wrapper ${className}`}
      css={[
        bubbleWrapperCss,
        bubbleWrapperPosition(top, left),
        bubbleWrapperScale(scale),
      ]}
      title={title}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        title={title}
        css={bubbleLinkCss}
      >
        <Icon className="bubble-icon" css={bubbleSvgCss} />
        <span className="bubble-text" css={bubbleText}>
          {text}
        </span>
      </a>
    </div>
  );
}
