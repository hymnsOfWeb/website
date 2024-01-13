import { Ref, RefObject, forwardRef, useCallback } from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {
  dialogBtnContainerCss,
  closeIconCss,
  descContainerCss,
  dialogHeaderCss,
  dialogHeadingContainerCss,
  dialogWrapperCss,
  headerTextCss,
  demoBtnCss,
  buyBtnCss,
} from "@components/modal/styles";

interface ModalProps {
  name: string;
  color: string;
  list: string[];
}

function M({ name, color, list }: ModalProps, ref: Ref<HTMLDialogElement>) {
  const listMapper = useCallback((listDesc: string, index: number) => {
    return <li key={index}>{listDesc}</li>;
  }, []);
  const closeHandler = () => {
    const modal = (ref as RefObject<HTMLDialogElement>).current;
    if (modal) {
      modal.close();
      document.body.style.setProperty("overflow-y", "scroll");
    }
  };
  return (
    <dialog css={dialogWrapperCss} ref={ref}>
      <div css={dialogHeadingContainerCss(color)}>
        <div css={headerTextCss}>
          <span css={dialogHeaderCss} id="plan-name">
            {name} Plan
          </span>
          <div css={dialogBtnContainerCss}>
            <Link href="/" css={buyBtnCss}>
              Buy Now
            </Link>
            <Link href="/" css={demoBtnCss}>
              <span>Live Demo </span>
              <BsArrowUpRight />
            </Link>
          </div>
        </div>
        <IoClose css={closeIconCss} onClick={closeHandler} />
      </div>
      <ol css={descContainerCss(color)}>{list.map(listMapper)}</ol>
    </dialog>
  );
}

const Modal = forwardRef(M);
export default Modal;
