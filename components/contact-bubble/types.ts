import { IconType } from "react-icons";

export interface BubbleDataProps {
  href: string;
  className?: string;
  styles: {
    top: number;
    left: number;
    scale: number;
  };
  icon: IconType;
  text: string;
}
